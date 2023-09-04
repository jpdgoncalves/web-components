const moreOptionsList = document.querySelectorAll(".more-options");

for (let moreOptions of moreOptionsList) {
    const icon = moreOptions.children[0];
    const content = moreOptions.children[1];
    const options = content.children;

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
        option.addEventListener("click", () => {
            content.dataset.show = "";
            moreOptions.dispatchEvent(new CustomEvent(
                "selected",
                {
                    detail: option
                }
            ));
        });
    }
}