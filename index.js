const navbar = document.querySelector(".my_navbar");
const hamburger = document.getElementById("my_hamburger");
const sidebar = document.getElementById("my_sidebar");
const slidebar_close_btn = document.querySelector(".sidebar_close_btn");

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