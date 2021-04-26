import { getSizes } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            window.alert(``)
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    for (const size of sizes) {
        html += `<li>
                <input type="radio" name="size" value="${size.id}" /> ${size.carets}
                </li>`
    }

    // // Use .map() for converting objects to <li> elements
    // const listItems = metals.map(size => {
    //     size += `<li>
    //         <input type="radio" name="size" value="${size.id}" /> ${size.carets}
    //     </li>`
    //     return size
    // })

    // html += listItems.join("")

    html += "</ul>"

    return html
}

