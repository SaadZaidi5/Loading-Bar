const parent = document.getElementById('par');
const child = parent.firstElementChild;
const next = child.nextElementSibling;
const next1 = next.nextElementSibling;
const next2 = next1.nextElementSibling;
const next3 = next2.nextElementSibling;
const next4 = next3.nextElementSibling;
const next5 = next4.nextElementSibling;
let loop = 0;
function forward() {
    if (loop === 0) {
        child.classList.add("fill");
        loop++;
    }
    else if (loop === 1) {

        next.classList.add("fill");
        loop++;
    }
    else if (loop === 2) {

        next1.classList.add("fill");
        loop++;
    }
    else if (loop === 3) {

        next2.classList.add("fill");
        loop++;
    }
    else if (loop === 4) {

        next3.classList.add("fill");
        loop++;
    }
    else if (loop === 5) {

        next4.classList.add("fill");
        loop++;
    }
    else if (loop === 6) {

        next5.classList.add("fill");
    }
}

function previous() {
    if (loop === 6) {
        next5.classList.remove("fill");
        loop--;
    }
    else if (loop === 5) {
        next4.classList.remove("fill");
        loop--;
    }
    else if (loop === 4) {
        next3.classList.remove("fill");
        loop--;
    }
    else if (loop === 3) {
        next2.classList.remove("fill");
        loop--;
    }
    else if (loop === 2) {
        next1.classList.remove("fill");
        loop--;
    }
    else if (loop === 1) {
        next.classList.remove("fill");
        loop--;
    }
    else if (loop === 0) {
        child.classList.remove("fill");
    }
}