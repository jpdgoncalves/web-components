import * as Script from "./components/script.mjs";

import toast from "./components/toast/toast.mjs";
import { commands, SELECTED_MODE_EVENT, COMMAND_SENT_EVENT } from "./components/commands.mjs";
import { aggregateHandlers } from "./utils/command.mjs";
import defaultCommand from "./commands/default.mjs";

const cmdHandler = aggregateHandlers(
    ["default", defaultCommand]
);

commands.addEventListener(SELECTED_MODE_EVENT, (event) => {
    toast(event.detail)
});

commands.addEventListener(COMMAND_SENT_EVENT, (event) => {
    cmdHandler(event.detail, Script)
});