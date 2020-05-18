/** Archivo de Especificaciones
 * 		Una especificación puede tener X parámetros de construcción. 
 * 		La constante debe ser un método "isSatisfied()", que dirá si se cumple o no una condición.
 * 
 * 		"isSatisfied" recibe un objeto como parámetro, y compara una propiedad de ese objeto
 * 		para decir si cumple o no con la condición dentro de él.
 */
class CategorySpecification {
	constructor (category) {
		this.category = category
	}

	isSatisfied (item) {
		return this.category === item.category
	}
}

class PriceSpecification {
	constructor (min, max) {
		this.min = min
		this.max = max
	}

	isSatisfied (item) {
		return ((item.price - this.min)*(item.price - this.max) <= 0)
	}
}

/** Mezcladores de especificaciones
 *		Toman un montón de especificaciones (Y sus respectivos métodos "isSatisfied")
 *		y los hacen trabajar juntos, creando un solo isSatisfied() de todos ellos.
 *
 *		De esta forma, esto SIGUE SIENDO una especificación, pero compuesta de otras
 */
class AndSpecification {
	constructor (...specs) {
		this.specs = specs
	}

	isSatisfied (item) {
		return this.specs.every(x => x.isSatisfied(item))
	}
}

class OrSpecification {
	constructor (...specs) {
		this.specs = specs
	}

	isSatisfied (item) {
		return this.specs.some(x => x.isSatisfied(item))
	}
}

/** Constructor de Especificaciones
 * 		Recibe una clase de tipo Especificación y un arreglo de parámetros,
 * 		y devuelve un array con objetos de tipo Especificación, ya listos
 * 		para correr contra variables 
 */
class SpecificationBuilder {
	constructor (specificationClass) {
		this.specificationClass = specificationClass
	}

	buildSpecifications (array_of_parameters) {
		return array_of_parameters.map(x => {
			if (Array.isArray(x))
				return new this.specificationClass(...x); 
			return new this.specificationClass(x)
		})
	}
}

export {
	CategorySpecification,
	PriceSpecification,
	AndSpecification,
	OrSpecification,
	SpecificationBuilder
}