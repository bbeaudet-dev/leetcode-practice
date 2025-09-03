// given current stock (product → quantity) and a list of orders (product → quantity), return which orders cannot be fulfilled (product not in stock or insufficient quantity).

const stock = { ham: 45, orange: 5, apple: 10 };
const orders = {  orange: 6, apple: 8, pear: 2 };
// expected: ["orange", "pear"]

// S, R
// O(S*R)
function unfulfillableOrders(stock: object, orders: object): string[] {
    const results: string[] = []

    for (const orderItem in orders) {
        console.log('checking orderItem', orderItem)
        let foundMatch = false
        for (const item in stock) {
            console.log('comparing stockItem',item,'with orderItem',orderItem)
            if (item === orderItem) {
                foundMatch = true
                console.log('orderItem',orderItem,'matches stockItem',item)
                if (stock[item] < orders[orderItem]) {
                    results.push(orderItem)
                    console.log('not enough inventory of',item, 'for order', results)
                    break
                } else {
                    console.log('we have enough product', orderItem, ' to fulfill orders')
                    break
                }
            }
        }
        if (foundMatch === false) {
            results.push(orderItem)
            console.log('product not found',orderItem, results)
        }
    }
    return results
}

console.log(unfulfillableOrders(stock, orders))