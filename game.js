// Select the navigation elements

const menuButton = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");


// Open and close the mobile navigation menu

menuButton.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✕" : "☰";

});


// Close the mobile menu after selecting a section

const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});


// Automatically display the current year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Welcome message in the browser console

console.log("Welcome to Suganya T's Portfolio!");