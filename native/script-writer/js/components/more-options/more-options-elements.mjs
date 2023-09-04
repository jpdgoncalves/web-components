
/**
 * 
 * @param {string} iconSrc
 * @param  {...string} options 
 */
export function createMoreOptions(iconSrc, ...options) {
    const moreOptions = document.createElement("div");
    const icon = document.createElement("img");
    const content = document.createElement("ul");

    moreOptions.classList.add("more-options");
    icon.classList.add("more-options__icon");
    content.classList.add("more-options__content");

    icon.src = iconSrc;
    content.dataset.show = "hide";

    moreOptions.addEventListener("transitionend", () => {
        if (content.dataset.show === "") {
            content.dataset.show === "hide";
        }
    })

    icon.addEventListener("click", () => {
        content.dataset.show = content.dataset.show === "true" ? "" : "true";
    });

    for (let option of options) {
        const li = document.createElement("li");
        li.innerText = option;
        li.addEventListener("click", () => {
            content.dataset.show = "";
            moreOptions.dispatchEvent(new CustomEvent(
                "selected",
                {
                    detail: option
                }
            ));
        });

        content.appendChild(li);
    }

    moreOptions.appendChild(icon);
    moreOptions.appendChild(content);
    return moreOptions;
}