import { getSizes, setSize } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value))
        }
    }
)



// Use .map() for converting objects to <li> elements
export const DiamondSizes = () => {
    let html = "<ul>"

    const sizeList = sizes.map(
        (size) => {
            return `<li>
        <input type="radio" name="size" value="${size.id}" /> ${size.carets}
    </li>`
        })

    html += sizeList.join("\n")
    html += "</ul>"
    return html
}