/**
 * 
 * @param {string} input 
 */
export function parseCommand(input) {
    input = input.trim();
    const idx = input.indexOf(" ");
    const cmd = input.substring(0, idx);
    const arg = input.substring(idx).trim();
    return [cmd, arg]
}

/**
 * 
 * @param  {...[string, Function]} handlers 
 */
export function aggregateHandlers(...handlers) {
    const handlerMap = new Map();
    
    for (let [cmd, handler] of handlers) {
        if (handlerMap.has(cmd)) throw new Error(`Command ${cmd} added twice.`);
        handlerMap.set(cmd, handler);
    }

    if (!handlerMap.has("default")) throw new Error(`No default command found.`);

    return function handle(input, context) {
        const [cmd, arg] = parseCommand(input);
        if (handlerMap.has(cmd)) {
            handlerMap.get(cmd)(arg, context);
        } else {
            handlerMap.get("default")(input, context);
        }
    }

}