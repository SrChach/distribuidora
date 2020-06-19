/** Modulo para ordenar productos
 *      'product' es un arreglo del tipo
 *          [{category: '...', name: '...', ...}, ...]
 *      'featured_categories' 
 *          [{category: '...', ...}, ...]
 */


/** Ordenar productos por su categoría interna
 * @param {Array.<Object>} products
 */
let order_by_category = function (products) {
    return products.sort((product_a, product_b) => {
        const cat_a = product_a.category
        const cat_b = product_b.category

        let comparison = 0
        if (cat_a > cat_b)
            comparison = 1
        else if (cat_b > cat_a)
            comparison = -1

        return comparison
    })
}

let order_by_priority = function(products, priorized_categories) {
    return products.sort((product_a, product_b) => {

        const category_a = product_a.category;
        const category_b = product_b.category;

        let comparison = 0
        if (priorized_categories.includes(category_a) && !priorized_categories.includes(category_b))
            comparison = -1
        else if (!priorized_categories.includes(category_a) && priorized_categories.includes(category_b))
            comparison = 1

        return comparison
    })
}

/** Ordenar productos por categoría, pero poniendo primero las categorías destacadas
 * @param {Array.<Object>} products
 * @param {Array.<Object>} featured_categories
 */
let order_products = function (products, featured_categories) {
    let priorized_categories = featured_categories
        .filter(c => c.priority !== undefined)
        .map(c => c.category)

    let featured_category_names = featured_categories.map(c => c.category)
    let featured_products = products.filter(p => featured_category_names.includes(p.category))
    let not_featured_products = products.filter(p => !featured_category_names.includes(p.category))

    featured_products = order_by_category(featured_products)
    not_featured_products = order_by_category(not_featured_products)

    let all_products = featured_products.concat(not_featured_products)

    return order_by_priority(all_products, priorized_categories)
}

export {order_products}