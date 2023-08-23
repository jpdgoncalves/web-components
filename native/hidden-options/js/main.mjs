const $clickable = document.getElementById("clickable");
const $hiddenOptions = $clickable.nextElementSibling;

$clickable.addEventListener("click", () => {
    $hiddenOptions.classList.toggle("show");
});