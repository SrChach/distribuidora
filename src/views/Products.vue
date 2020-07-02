<template>
	<div class="">
		<br>
		<div class="container is-fluid" id="products">
			<div class="columns is-multiline is-tablet is-widescreen is-touch is-mobile">
				<div
					class="column is-10 is-offset-1"
					:style="'height:auto; border-bottom: 2px solid ' + found_featured_color(selected_category)"
				>
					<div class="colums">

						<div class="column is-12">
							<b-field :label="'Precio máximo seleccionado: ' + selected_price" class="has-text-centered">
								<b-slider
									v-model="selected_price"
									:min="min_price" :max="max_price"
									:step="0.5"
									lazy
									type="is-warning"
									@change="filtered = get_satisfied()"
								/>
							</b-field>
						</div>

						<div class="column is-12">
							<div class="tabs is-centered is-toggle">
								<ul>
									<li @click="selected_category = 'Todas'" :class="(selected_category == 'Todas') ? 'is-active' : '' ">
										<a href="#category-Pollo">
											<figure class="image is-32x32 is-hidden-mobile" style="margin-top: .5rem">
												<img v-show="(selected_category == 'Todas')" src="@/assets/conchitalogo.jpeg">
											</figure>
											<img style="margin-left: 1rem" class="imagen" src="../assets/todos.png" alt="ategoryIma">
										</a>
									</li>
									<li
										v-for="(category, index) in featured_categories" :key="index"
										:class= "(selected_category == category.category) ? 'is-active' : ''"
										@click="selected_category = category.category"
									>
										<div class="columns is-multiline is-mobile ">
											<div class="column is-12">
												<a
													:class="(selected_category == category.category) ? `${category.tab_style}` : ''" :href="`#category-${category.category}`"
												>
														<figure class="image is-32x32 is-hidden-mobile" style="margin-top: 1rem">
															<img v-show="(selected_category == category.category)" :src="category.ima">
														</figure>
														<img style="margin-left: 1rem" class="imagen" :src="category.categoryIma" :alt="category.categoryIma">
												</a>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="column is-10 is-offset-1 scrollsmooth" style="height: 80vh; overflow-y: scroll;">
					<div class="columns is-multiline is-mobile">
						<template v-for="(product, index) in products">
							<div
								class="column is-full" :key="index + '-separador'" :id="`category-${product.category}`"
								v-if="(index == 0 || product.category != products[index - 1].category)"
							>
								<div class="divider">
									<figure class="image is-32x32">
										<img class="is-rounded" src="@/assets/conchitalogo.jpeg" alt="Logo">
									</figure>
									{{ product.category }}
								</div>
							</div>
							<div
								class="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-2-full-screen"
								v-show="filtered.includes(product.id)"
								:key="index"
							>
								<productCard
									:image="product.path"
									:product="product.name"
									:category="product.category"
									:price="product.price"
									:color="found_featured_color(product.category)"
								/>
							</div>
						</template>
					</div>
				</div>

			</div>
		</div>
		<br>
	</div>
</template>

<script>
// Datos
import productsData from '@/data/products.js'

// Funcionalidad
import {ItemFilter} from '@/utils/filter.js'
import { CategorySpecification, OrSpecification, SpecificationBuilder, PriceSpecification, AndSpecification } from '@/utils/specs.js'
import {order_products} from '@/utils/order_products.js'

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
			is_modal_active: true,
			featured_categories: [
				{
					category: 'Pollo',
					ima: require('../assets/stockCatalogo/pollo/pollo entero.jpeg'),
					tab_style: 'tab-pollo',
					color: '#faff81',
					categoryIma: require('../assets/featured_categories/pollomini.png')
				},
				{
					category: 'Cerdo',
					ima: require('../assets/stockCatalogo/cerdo/pierna3.jpeg'),
					tab_style: 'tab-cerdo',
					color: '#f1b6ae',
					categoryIma: require('../assets/featured_categories/cerdomini.png')
				},
				{
					category: 'Res',
					ima: require('../assets/stockCatalogo/res/res.jpeg'),
					tab_style: 'tab-res',
					color: '#e97272',
					categoryIma: require('../assets/featured_categories/res transparente.png')
				},
				{
					category: 'Pescados',
					ima: require('../assets/stockCatalogo/pescado/pescados.jpg'),
					tab_style: 'tab-pescado',
					color: '#296d92',
					categoryIma:require('../assets/featured_categories/pescadomini.png')
				},
				{
					category: 'Frutas',
					ima: require('../assets/stockCatalogo/frutas/frutas.png'),
					tab_style: 'tab-fruta',
					color: '#66FF66',
					categoryIma: require('../assets/featured_categories/frutasmini.png')
				},
				{
					category: 'Verduras',
					ima: require('../assets/stockCatalogo/verduras/verduras.jpeg'),
					tab_style: 'tab-verdura',
					color: '#449c08',
					categoryIma: require('../assets/featured_categories/verdurasmini.png')
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
		found_featured_class: function (category) {
			let founded = this.featured_categories.find(o => o.category == category)
			if (typeof(founded) == 'undefined')
				return ''
			return founded.custom_class
		},
		found_featured_color: function (category) {
			let founded = this.featured_categories.find(o => o.category == category)
			if (typeof(founded) == 'undefined')
				return '#209CEF'
			return founded.color
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

		this.products = order_products(this.products, this.featured_categories)
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
<style lang="scss" scoped>
	@import "@/styles/views/_products.scss";

	@media only screen and (max-width: 769px) {
		.tabs {
			overflow-x: hidden;
		}
	}

	.divider::after, .divider::before {
		height: 10px;
	}
	.imagen{
		height: 1.7rem;
		width: auto;
	}
</style>