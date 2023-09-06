import { createMoreOptions } from "./more-options/more-options-elements.mjs";
import element from "../utils/elements.mjs";

/**
 * 
 * @param {string} narration 
 */
export function createNarration(narration) {
    const builder = element("div").classes("script__narration");
    const scriptNarration = builder.element;
    builder.child("p").text(narration);
    const moreOptions = builder.child(createMoreOptions("./icons/ellipsis.svg", "delete"));
    moreOptions.listener("selected", (event) => {
        scriptNarration.remove();
    });

    return scriptNarration;
}