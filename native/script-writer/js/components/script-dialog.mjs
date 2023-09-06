import { createMoreOptions } from "./more-options/more-options-elements.mjs";
import element from "../utils/elements.mjs";

/**
 * 
 * @param {string} imgSrc 
 * @param {string} characterName 
 * @param {string} dialog 
 */
export default function createDialog(imgSrc, characterName, dialog) {
    const scriptDialogBuilder = element("div").classes("script__dialog");
    const scriptDialog = scriptDialogBuilder.element;
    
    scriptDialogBuilder.child("img").attrs("src", imgSrc);
    scriptDialogBuilder.child("span").text(characterName);
    scriptDialogBuilder.child("p").text(dialog);
    scriptDialogBuilder.child(createMoreOptions("./icons/ellipsis.svg", "delete"))
        .listener("selected", () => {
            scriptDialog.remove()
        });
    return scriptDialog;
}