/** Filtro
 *		Recibe los items compara si estos cumplen o no con una especificación.
 *		Una especificación debe ser un objeto, que no importa lo que tenga, tenga un método
 *			"isSatisfied()"
 *		el cual debe decir si se cumple o no una condición, como True o como False
 */
class ItemFilter {
	filter (items, specification) {
		return items.filter(x => specification.isSatisfied(x))
	}
}

export {ItemFilter}