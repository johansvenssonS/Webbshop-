const openButton = document.querySelector("#open-button");
const basket = document.querySelector("#basket-container");
const closeButton = document.querySelector("#close-button");

closeButton.addEventListener("click", () => {
    basket.classList.remove("show");
});
openButton.addEventListener("click", () => {
    basket.classList.add("show");
});
