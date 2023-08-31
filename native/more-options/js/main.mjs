const moreOptionsList = document.querySelector(".more-options");

moreOptionsList.addEventListener("selected", (event) => {
    console.log(event.detail.src);
});