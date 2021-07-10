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
        product: "white onion",
    },
    {
        cat: "Grains",
        product: "groundnut",
    },
    {
        cat: "Grains",
        product: "basmati rice",
    },
    {
        cat: "Grains",
        product: "non basmati rice",
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

const replace_trailing_commas = /['"`,]+/g;


// append data to html
unique_categories.map(category => {
    let str = `
    <div class='product_category'>
    <h1 class='cat_name'>${category}</h1>
    <div class="all_products">
    ${data.map(product => {
        if (product.cat === category) {
            // doing below stuff so that i'll get names of product under img properly not exactly as img names. so now to image work i've to remove the spaces between names as defined in data array
            let joinImageName = product.product.replace(/[\s+]/g, "");
            return (`
                <div class='product_card'>
                <img class='product_img' src=${imgaddr + joinImageName + '.jpg'} alt=${joinImageName}>
                <span class='name'>${product.product.toUpperCase()}</span>
                </div>`
            )
        }
    })}
    </div>
    </div>`
    products_section.insertAdjacentHTML("beforeend", str.replace(replace_trailing_commas, ""));
});



// logic to apply product image to bg when click on img
const product_images = document.querySelectorAll(".product_img");
const applyProductImagesToBG = () => {
    product_images.forEach(img => {
        img.addEventListener("click", (e) => {
            product_cont.style.backgroundImage = `url(${img.src})`;
        })
    })
}

//by default apply a image to background
product_cont.style.backgroundImage = 'url("./styles/images/products/banana.jpg")';

applyProductImagesToBG();

// run it again if images are not loaded
const applyEvent = setTimeout(() => {
    applyProductImagesToBG();
    clearTimeout(applyEvent);
}, 5000);
