export const SELECTED_MODE_EVENT = "selected-mode";
export const COMMAND_SENT_EVENT = "command-sent";

export const commands = document.querySelector(".commands");
const commandMode = commands.querySelector(".commands__mode");
const commandInput = commands.querySelector(".commands__input");
const commandSend = commands.querySelector(".commands__send");

commandMode.addEventListener("selected", (event) => {
    commands.dispatchEvent(new CustomEvent(SELECTED_MODE_EVENT, {
        detail: event.detail.dataset.value
    }));
});

commandSend.addEventListener("click", () => {
    commands.dispatchEvent(new CustomEvent(COMMAND_SENT_EVENT, {
        detail: commandInput.innerText
    }));
    commandInput.innerText = "";
});