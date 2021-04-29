import { getTypes, setType } from "./database.js"

// import copy of types database
const types = getTypes()

// event listener to register button
document.addEventListener(
    "change",
    (event) => {
        if(event.target.name === "type") {
            // invoke setType function
            setType(parseInt(event.target.value))
        }
    }
)

export const JewelryTypes = () => {
    let html = ""

    const typesList = types.map(
        (type) => {
            return `<input type="radio" name="type" value="${type.id}" /> ${type.type}`
        }
    )

    html += typesList.join(" ")

    return html
}