import { createNarration } from "../components/script-narration.mjs";

/**
 * 
 * @param {string} arg 
 * @param {import("../components/script.mjs")} context 
 */
export default function defaultCommand(arg, context) {
    context.insert(createNarration(arg))
}