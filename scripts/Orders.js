import { getOrders, getMetals, getSizes, getStyles, getTypes } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const types = getTypes()

const buildOrderListItem = (order) => {
    // function to access price of metal selected by radio-input event
    // must be declated inside of HTML-generating function (here itself passed into other functions, oy)
    const foundMetal = metals.find(
        (metal) => {
            return metal.id === order.metalId
        }
    )
    // function to access the price of the size selected by radio-input event

    const foundSize = sizes.find(
        (size) => {
            return size.id === order.sizeId
        }
    )

    // function to access the price of the style selected by radio-input event

    const foundStyle = styles.find(
        (style) => {
            return style.id === order.styleId
        }
    )

    const foundType = types.find(
        (type) => {
            return type.id === order.typeId
        }
    )

    // then add them all up to pass into HTML return!

    const total = (foundMetal.price + foundSize.price + foundStyle.price) * foundType.price
    
    // rounds total to two decimal places
    const totalCost = total.toFixed(2)

    return `<li>
        <strong>Order #${order.id}</strong> was placed at the ridiculous time of ${order.timestamp} UTC and will cost the consumer $${ totalCost }.
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    //    because it has to be re-called every time a new order is placed

    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("\n")
    html += "</ul>"

    return html
}



