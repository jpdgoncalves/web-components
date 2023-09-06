export const script = document.querySelector(".script");
const scriptTitle = script.querySelector(".script__title");

export let selectedElement = scriptTitle;

scriptTitle.addEventListener("click", () => {
    selectedElement.classList.remove("script__selected");
    selectedElement = scriptTitle;
    selectedElement.classList.add("script__selected");
});

/**
 * 
 * @param {HTMLElement} element 
 */
export function insert(element) {
    selectedElement.insertAdjacentElement("afterend", element);
    selectedElement = element;
    element.addEventListener("click", () => {
        selectedElement.classList.remove("script__selected");
        selectedElement = element;
        selectedElement.classList.add("script__selected");
    });
}

/**
 * 
 * @param {HTMLElement} element 
 */
export function remove(element) {
    script.removeChild(element);
}