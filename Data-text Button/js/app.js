
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelectorAll(".btn");
    const alert = document.querySelector(".alert");

    for (let el of btn) {
    el.addEventListener("click", e => {
            alert.innerHTML = el.dataset.text;
        })
    }
});

