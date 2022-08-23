const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
const icon = document.querySelector(".fa-bars");
toggler.addEventListener("click", (e) => {
    console.log("clicked");
    navbar.classList.toggle("nav__expanded");
    icon.classList.toggle("fa-bars");
    icon.classList.toggle("fa-close");
});


const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
    const targetTabContente = document.querySelector(`#${tab.dataset.tabTarget}`);

    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    targetTabContente.classList.add("active");
    });
});


AOS.init();
