const scriptTitle = document.querySelector(".script__title");
const content = scriptTitle.querySelector("h1");

/**
 * 
 * @param {string} title 
 */
export function setTitle(title) {
    content.innerText = title;
}

export function getTitle(title) {
    return content.innerText;
}