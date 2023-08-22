
const fragment = () => {
    const $template = document.createElement("template")
    $template.innerHTML = /*html*/`
        <div class="sliding-menu">
            <div class="selected-item"></div>
            <ul class="items-list bottom"></ul>
        </div>
    `
    return $template.content
}

const ALLOWED_SIDE_VALUES = new Set(["top", "bottom", "left", "right"]);

export default class LTSlidingMenu extends HTMLElement {
    #$selected;
    #$list;
    static get observedAttributes() { return ["side", "show"] }

    get side() {return this.getAttribute("side")}

    set side(newValue) {this.setAttribute("side", newValue)}

    get show() {return this.getAttribute("show") === "true"}

    set show(newValue) {this.setAttribute("show", newValue)}

    constructor() {
        super()

        // Remove the original children and append them to a list
        const items = [];
        while (this.firstChild) {
            const child = this.firstChild;
            this.removeChild(child);
            if (!(child instanceof HTMLElement)) continue;
            items.push(child);
        }
        console.log(items);

        // Append the fragment to the shadow dom
        this.appendChild(fragment());

        // Get the selected and list elements
        this.#$selected = this.querySelector(".selected-item");
        this.#$list = this.querySelector(".items-list");

        // Set the first item as the selected by clonning the item
        this.#$selected.appendChild(items[0].cloneNode(true));

        // Append the items wrapped in a li to the list.
        for (let item of items) {
            const li = document.createElement("li");
            li.appendChild(item);
            // Attach to each children a listener to choose the selected element
            li.addEventListener("click", () => {
                this.#$selected.removeChild(this.#$selected.firstElementChild)
                this.#$selected.appendChild(li.firstElementChild.cloneNode(true))
                this.#$list.querySelector(".selected").classList.remove("selected")
                li.classList.add("selected")
                this.dispatchEvent(new CustomEvent("selected", {detail: li.firstElementChild}));
            });

            this.#$list.appendChild(li);
        }

        // Add the class selected to the first li.
        this.#$list.children[0].classList.add("selected");

        // Try to get the side and show attributes and set the class on the list
        const side = this.hasAttribute("side") ? this.getAttribute("side") : "bottom";
        const show = this.hasAttribute("show") ? this.getAttribute("show") : "false";
        this.setAttribute("side", side);
        this.setAttribute("show", show);

        // Add click listener to show and hide the list
        this.querySelector(".sliding-menu").addEventListener("click", () => {
            this.show = !this.show  
        })
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case "side": 
                if (ALLOWED_SIDE_VALUES.has(newValue)) {
                    this.#$list.classList.remove(...ALLOWED_SIDE_VALUES);
                    this.#$list.classList.add(newValue);
                }
                break;
            case "show":
                const show = newValue === "true" 
                show ? this.#$list.classList.add("show") : this.#$list.classList.remove("show");
                break;
            default:
        }
    }
}

customElements.define("lt-sliding-menu", LTSlidingMenu)