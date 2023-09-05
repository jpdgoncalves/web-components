let toastElement;
let toastContent;
let timeout;
let timeoutId;

if (!(toastElement = document.querySelector(".toast"))) {
    toastElement = document.createElement("div");
    toastElement.classList.add("toast");
    document.body.appendChild(toastElement);
}

if (!(toastContent = document.querySelector(".toast__content"))) {
    toastContent = document.createElement("div");
    toastContent.classList.add("toast__content");
    toastElement.appendChild(toastContent);
}

timeout = parseInt(toastElement.dataset.timeout) * 1000;
timeout = Number.isNaN(timeout) ? 5000 : timeout;

/**
 * 
 * @param {string | HTMLElement} message 
 */
export default function toast(message) {
    toastContent.innerHTML = "";
    clearTimeout(timeoutId);

    if (message instanceof HTMLElement) {
        toastContent.appendChild(message);
    } else {
        toastContent.innerText = message;
    }

    toastElement.dataset.show = "true";
    timeoutId = setTimeout(() => {
        toastElement.dataset.show = "";
        toastContent.innerHTML = "";
    }, timeout);
}