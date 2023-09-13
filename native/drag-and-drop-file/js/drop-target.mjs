const dropTargets = document.querySelectorAll(".drop-target");

/**
 * 
 * @param {Function} listener 
 * @param {HTMLElement} target 
 * @returns 
 */
const prependTarget = function (listener, target) {
    return function (event) {
        listener.apply(this, [target, event]);
    }
}

function dragOverHandler(ev) {
    console.log("File(s) in drop zone");
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
}

/**
 * 
 * @param {HTMLElement} target 
 * @param {DragEvent} event 
 */
async function onDrop(target, event) {
    event.preventDefault();
    const item = event.dataTransfer.items[0];

    if (item.kind !== "file") return;

    target.innerHTML = "";
    const file = item.getAsFile();

    switch(item.type) {
        case "text/plain":
            const text = await file.text();
            target.innerText = `
            Text File Name: ${file.name}
            Contents: ${text}
            `;
            break;
        
        case "image/png":
            const url = URL.createObjectURL(file);
            const img = document.createElement("img");
            img.src = url;
            img.onload = () => {
                URL.revokeObjectURL(url);
            };
            target.appendChild(img);
    }
}

for (let dropTarget of dropTargets) {
    dropTarget.addEventListener("dragover", dragOverHandler);
    dropTarget.addEventListener("drop", prependTarget(onDrop, dropTarget));
}