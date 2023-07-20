console.log("hello");

let sectionSobre = document.querySelector("#navSobre");
let sectionStack = document.querySelector("#navStack");
let sectionProjetos = document.querySelector("#navProjetos");

let barra1 = document.querySelector("#barra1");
let barra2 = document.querySelector("#barra2");
let barra3 = document.querySelector("#barra3");


sectionSobre.addEventListener("click", () => {
    barra1.classList.add("active");
    barra2.classList.remove("active");
    barra3.classList.remove("active");
})

sectionStack.addEventListener("click", () => {
    barra1.classList.remove("active");
    barra2.classList.add("active");
    barra3.classList.remove("active");
})

sectionProjetos.addEventListener("click", () => {
    barra1.classList.remove("active");
    barra2.classList.remove("active");
    barra3.classList.add("active");
})


