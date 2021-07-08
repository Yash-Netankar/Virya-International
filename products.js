const data = [
    {
        cat: "Fruits",
        product: "banana",
    },
    {
        cat: "Fruits",
        product: "papaya",
    },
    {
        cat: "Vegetables",
        product: "drumstick",
    },
    {
        cat: "Vegetables",
        product: "potato",
    },
    {
        cat: "Vegetables",
        product: "onion",
    },
    {
        cat: "Vegetables",
        product: "whiteonion",
    },
    {
        cat: "Grains",
        product: "groundnut",
    },
    {
        cat: "Grains",
        product: "basmatirice",
    },
    {
        cat: "Grains",
        product: "nonbasmatirice",
    },
    {
        cat: "Others",
        product: "cotton",
    },

];
let unique_categories = [...new Set(data.map(({ cat }) => cat))];
const imgaddr = "./styles/images/products/";

const product_cont = document.getElementById("products_container");
const products_section = document.querySelector(".products_section");




unique_categories.map(category => {
    let str = `
    <div class='product_category'>
    <h1>${category}</h1>
    <div class="all_products">
    ${data.map(product => {
        if (product.cat === category) {
            return (`
                <div class='product_card'>
                <img src=${imgaddr + product.product + '.jpg'} alt=${product.product}>
                <span class='name'>${product.product}</span>
            </div>`
            )
        }
    })}
    </div>
    </div>`
    products_section.insertAdjacentHTML("beforeend", str.replace(/\s+/g, ''));
})
