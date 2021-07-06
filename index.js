const navbar = document.querySelector(".my_navbar");
const hamburger = document.getElementById("my_hamburger");
const sidebar = document.getElementById("my_sidebar");
const slidebar_close_btn = document.querySelector(".sidebar_close_btn");
const products_slider = document.querySelectorAll(".product_slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

// making navbar sticky when page is scrolled
window.addEventListener("scroll", () => {
    if (window.scrollY >= 15) {
        navbar.classList.add("sticky");
        hamburger.style.color = "#fff";
    }
    else {
        navbar.classList.remove("sticky");
        hamburger.style.color = "#000";
    }
});



// toggling of sidebar functionality
hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
slidebar_close_btn.addEventListener("click", () => {
    sidebar.classList.remove("show");
});



// products slider
let flag = 0;

const slider = (num) => {
    products_slider.forEach(slide => {
        slide.style.display = "none";
    })
    products_slider[num].style.display = "block";
}
slider(flag);

// next slide
next.addEventListener("click", () => {
    if (flag === products_slider.length - 1) {
        flag = 0;
        slider(flag);
    }
    else {
        flag += 1;
        slider(flag);
    }
});

// previous slide
prev.addEventListener("click", () => {
    if (flag === 0) {
        flag = 3;
        slider(flag);
    }
    else {
        flag -= 1;
        slider(flag);
    }
})
