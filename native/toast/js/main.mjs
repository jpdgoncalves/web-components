import toast from "./toast/toast.mjs";

function start() {
    const span = document.createElement("span");
    span.innerText = "This works too.";

    toast("This works");

    setTimeout(() => {
        toast(span);
    }, 6000);

    setTimeout(() => {
        start();
    }, 12000);
}

start();