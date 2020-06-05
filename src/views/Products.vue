<template>
	<div class="section">
		<div class="container is-fluid">
			<div class="columns">
				<div class="column">
					<b-field :label="'Precio máximo seleccionado: ' + selected_price">
						<b-slider
							v-model="selected_price"
							:min="min_price" :max="max_price"
							:step="0.5"
							lazy
							@change="filtered = get_satisfied()"
						/>
					</b-field>
				</div>
				<div class="column">
					<b-field :label="'Categorías: ' + selected_category">
						<b-select placeholder="Todas" v-model="selected_category" expanded>
							<option value="Todas" selected>Todas</option>
							<option v-for="(category, index) in categories" :key="index" :value="category.name">
								{{ category.name }}
							</option>
						</b-select>
					</b-field>
				</div>
			</div>
			<div class="columns is-multiline is-mobile">
				<div
					class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-2-full-screen"
					v-for="(product, index) in products" :key="index"
					v-show="filtered.includes(product.id)"
				>
					<productCard
						:image="product.path"
						:product="product.name"
						:description="product.description"
						:category_image="found_featured_image(product.category)"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// Datos
import productsData from '@/data/products.js'

// Funcionalidad
import {ItemFilter} from '@/utils/filter.js'
import {
	CategorySpecification, PriceSpecification,
	OrSpecification, AndSpecification,
	SpecificationBuilder
} from '@/utils/specs.js'

// Componentes
import productCard from '@/components/Product.vue'

export default {
	components: {
		'productCard': productCard
	},
	data: function(){
		return {
			categorySpecificationBuilder: null,
			myFilter: null,
			products: productsData,
			filtered: [],
			categories: [],
			selected_category: 'Todas',
			selected_price: 500,
			max_price: 0,
			min_price: 0,
			featured_categories: [
				{
					category: 'Pollo',
					image: 'featured_categories/Pollo.png'
				}
			]
		}
	},
	methods: {
		get_categories: function (products) {
			return products
				.map(product => product.category) // categorías repetidas
				.filter((value, index, self) => self.indexOf(value) === index) // categorías únicas
				.map(category_name => {
					return { selected: true, name: category_name } // Convierte a objetos
				})
		},
		found_featured_image: function (category) {
			let founded = this.featured_categories.find(o => o.category == category)
			if (typeof(founded) == 'undefined')
				return ''
			return founded.image
		},
		get_max_price: function (products) {
			let array_of_prices = products.map(product => product.price)

			this.max_price = array_of_prices
				.reduce((accumulator, currentValue) => {
					if(currentValue > accumulator)
						return currentValue
					return accumulator
				})

			this.min_price = array_of_prices
				.reduce((accumulator, currentValue) => {
					if(currentValue < accumulator)
						return currentValue
					return accumulator
				})
		},
		get_satisfied: function () {
			// Solo las categorías que están seleccionadas
			let selected_categories = this.categories
											.filter(category => category.selected === true)
											.map(category => category.name)

			// Construyendo las especificaciones
			let array_category_specs = this.categorySpecificationBuilder.buildSpecifications(selected_categories)
			let allCategoriesSpecification = new OrSpecification(
				...array_category_specs
			)

			let priceSpecification = new PriceSpecification(0, this.selected_price)

			let priceAndCategoriesSpecification = new AndSpecification(
				priceSpecification, allCategoriesSpecification
			)

			// Obteniendo solo los productos que cumplen las especificaciones
			let productsThatAccomplish = this.myFilter.filter(this.products, priceAndCategoriesSpecification)

			// Obteniendo un array solo con los id's de los productos que cumplieron
			return productsThatAccomplish.map(product => product.id)
		},
		change_category_status: function (isVisible = true, setTrue = null) {
			let all_change = this.categories.map(x => { 
				if (setTrue == x.name)
					return {selected: true, name: x.name}
				return {selected: isVisible, name: x.name}
			})
			this.categories = all_change
		}
	},
	created: function () {
		this.myFilter = new ItemFilter()
		this.categorySpecificationBuilder = new SpecificationBuilder(CategorySpecification)

		this.categories = this.get_categories(this.products)
		this.get_max_price(this.products)
		this.filtered = this.get_satisfied()
	},
	watch: {
		selected_category: function (newCategory) {
			if (newCategory == 'Todas') {
				this.change_category_status(true)
			} else {
				this.change_category_status(false, newCategory)
			}

			this.filtered = this.get_satisfied()
		}
	}
}
</script>