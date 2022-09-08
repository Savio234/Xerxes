const menu = document.querySelector(".mob-nav");
const hamburger = document.querySelector(".hamburger");
const close = document.querySelector(".closeIcon");
const nav = document.querySelector(".navIcon");

hamburger.addEventListener("click", toggleMenu);

menu.classList.contains("walletMenu");


function toggleMenu() {
    if (menu.classList.contains("walletMenu")) {
        menu.classList.remove("walletMenu");
        close.style.display = "none";
        nav.style.display = "block";
        menu.style.width = "0";
        menu.style.height = "0";
        
    } else {
        menu.classList.add("walletMenu");
        close.style.display = "block";
        nav.style.display = "none";
        menu.style.width = "100%";
        menu.style.height = "75%";
    }
}


let wallet = document.getElementById("overlay");
let opened = document.getElementById("openBtn");
let closed = document.getElementById("closeBtn");
let list = document.querySelector(".nav-btn-list");

// opened.addEventListener("click", openNav);
// closed.addEventListener("click", closeNav);

// menu.classList.contains("btnList");


function openNav() {
    wallet.style.height = "100%";
    list.style.display = "block";
}

function closeNav() {
    wallet.style.height = "0%";
    list.style.display = "none";
}


const none = document.querySelector(".modal-close");
const modal = document.querySelector(".supply-balance-modal");

none.addEventListener("click", cancel);

function cancel() {
    modal.style.display = "none";
}