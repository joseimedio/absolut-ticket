const btn_prev = document.querySelector(".slider-prev");
const btn_next = document.querySelector(".slider-next");

const slide_1 = document.querySelector(".slide");

btn_prev.addEventListener("click", () => {
    slide_1.style.zIndex = "1";
})

btn_next.addEventListener("click", () => {
    slide_1.style.zIndex = "0";
})