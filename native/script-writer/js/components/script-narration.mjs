import { createMoreOptions } from "./more-options/more-options-elements.mjs";
import element from "../utils/elements.mjs";

/**
 * 
 * @param {string} subtitle 
 */
export function createNarration(subtitle) {
    const builder = element("div").classes("script__narration");
    const scriptNarration = builder.element;
    builder.child("h2").text(subtitle);
    const moreOptions = builder.child(createMoreOptions("./icons/ellipsis.svg", "delete"));
    moreOptions.listener("selected", (event) => {
        scriptNarration.remove();
    });

    return scriptNarration;
}