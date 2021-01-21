
document.addEventListener('DOMContentLoaded', () => {
    const div = document.querySelector(".box");
    const span = document.querySelectorAll("span");
    const globalX = document.getElementById("globalX");
    const globalY = document.getElementById("globalY");
    const localX = document.getElementById("localX");
    const localY = document.getElementById("localY");

    div.addEventListener("mousemove", e => {
        globalX.innerHTML = e.clientX;
        globalY.innerHTML = e.clientY;
        localX.innerHTML = e.offsetX;
        localY.innerHTML = e.offsetY;
    })
})

