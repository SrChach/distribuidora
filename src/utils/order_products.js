/** Modulo para ordenar productos
 *      'product' es un arreglo del tipo
 *          [{category: '...', name: '...', ...}, ...]
 *      'featured_categories' 
 *          [{category: '...', ...}, ...]
 */


/** Ordenar productos por su categoría interna
 * @param {Array.<Object>} products
 */
let order_by_category = function (products, featured_categories = undefined) {
    return products.sort((product_a, product_b) => {
        const cat_a = product_a.category
        const cat_b = product_b.category

        let comparison = 0
        if (featured_categories === undefined) {
            if (cat_a > cat_b)
                comparison = 1
            else if (cat_b > cat_a)
                comparison = -1

            return comparison
        }

        return featured_categories.indexOf(cat_a) - featured_categories.indexOf(cat_b)
    })
}

/** Ordenar productos por categoría, pero poniendo primero las categorías destacadas
 * @param {Array.<Object>} products
 * @param {Array.<Object>} featured_categories
 */
let order_products = function (products, featured_categories) {
    let featured_category_names = featured_categories.map(c => c.category)
    let featured_products = products.filter(p => featured_category_names.includes(p.category))
    let not_featured_products = products.filter(p => !featured_category_names.includes(p.category))

    featured_products = order_by_category(featured_products, featured_category_names)
    not_featured_products = order_by_category(not_featured_products)

    let all_products = featured_products.concat(not_featured_products)

    return all_products
}

export {order_products}