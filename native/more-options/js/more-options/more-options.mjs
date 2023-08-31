const SIDE_TO_STYLE = new Map([
    ["right", "max-width"],
    ["left", "max-width"],
    ["top", "max-height"],
    ["bottom", "max-height"]
]);
const SIDE_TO_DIM = new Map([
    ["right", "scrollWidth"],
    ["left", "scrollWidth"],
    ["top", "scrollHeight"],
    ["bottom", "scrollHeight"]
]);

const moreOptionsList = document.querySelectorAll(".more-options");

for (let moreOptions of moreOptionsList) {
    const displayIcon = moreOptions.querySelector(".more-options__icon");
    const content = moreOptions.querySelector(".more-options__content");
    const firstOption = content.children[0];
    const firstIcon = firstOption.children[0];

    displayIcon.src = firstIcon.src;
    moreOptions.dataset.show = "";

    moreOptions.addEventListener("click", () => {
        const side = moreOptions.dataset.side;
        const styleName = SIDE_TO_STYLE.get(side);
        const dim = `${ content[SIDE_TO_DIM.get(side)] }px`;

        if (moreOptions.dataset.show !== "true") {
            moreOptions.dataset.show = "true";
            content.style[styleName] = dim;
        } else {
            moreOptions.dataset.show = "";
            content.style[styleName] = null;
        }
    });

    for (let option of content.children) {
        option.addEventListener("click", () => {
            const icon = option.children[0];
            displayIcon.src = icon.src;
            moreOptions.dispatchEvent(new CustomEvent("selected", {
                detail: icon
            }));

        });
    }

}