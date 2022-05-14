
//Ticket-modal
const openButtons = document.querySelectorAll(".js-order-button");
const closeButton = document.querySelector(".js-close-icon");
const modalContent = document.querySelector(".js-modal-content");
const modal = document.querySelector(".js-modal");

const openOrderBox = (e) =>{
    modal.classList.add("open");
}
const closeOrderBox = () =>{
    modal.classList.remove("open");
}

for (const openButton of openButtons){
    openButton.addEventListener("click", openOrderBox);
    openButton.addEventListener("click",(e)=>{
        e.preventDefault();
    });
}

closeButton.addEventListener("click", closeOrderBox);
modal.addEventListener("click", closeOrderBox);
modalContent.addEventListener("click", function (even) {
    even.stopPropagation();
});

//Header 
const menuHeader = document.querySelector(".menu-icon");
const header = document.getElementById("header");
const menuItems = document.querySelectorAll("#nav li a");
const menuSearch = document.querySelector(".nav-search");
const menuIcon = document.querySelector(".menu-icon");
const menuMore = document.querySelector("#nav >li .more-pres");

let openHeader = (e) =>{
    header.classList.toggle("js-open-header");
}

let preDefault = (e)=>{
    e.preventDefault()
}

for (let menuItem of menuItems){
    menuItem.onclick = function(e){
        if(menuItem == menuMore) e.preventDefault();
        else header.classList.remove("js-open-header");
    }
}

menuHeader.addEventListener("click", openHeader);
menuSearch.addEventListener("click", preDefault);
menuIcon.addEventListener("click", preDefault);
