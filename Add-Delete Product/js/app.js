// Na stronie znajduje się lista zakupów. Popatrz na HTML i zobacz jak lista jest zbudowana.
// Dopisz odpowiednią obsługę eventów tak, aby:
//
// Po kliknięciu przycisku pierwszego do listy został dopisany nowy produkt - Chleb.
//
// Po kliknięciu przycisku drugiego z listy był usuwany ostatni element.
// Jeżeli nie ma czego usunąć (lista jest pusta) powinna pojawić się taka informacja w konsoli: "Lista jest pusta".
//
// Po kliknięciu przycisku trzeciego na końcu listy był dodawany nowy produkt, który jest klonem drugiego produktu.
// Jeżeli na liście jest tylko jeden lub mniej produktów,
// w konsoli powinna pojawić się informacja: "Lista zawiera jeden lub mniej produktów".

document.addEventListener('DOMContentLoaded', () => {
    const button1 = document.querySelector("#button-1");
    const button2 = document.querySelector("#button-2");
    const button3 = document.querySelector("#button-3");
    const list = document.querySelector(".list-group-item");
    const li = document.querySelectorAll("li");
    const container = document.querySelector(".container");
    const ul = document.querySelector("ul");
    const shopping = document.querySelector("#shopping-list");

    button1.addEventListener("click", e => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");
        li.innerText = "Herbata";
        shopping.append(li);

    })

    button2.addEventListener("click", e => {
        if (shopping.children.length > 0) {
            const last = shopping.lastChild;
            last.remove();
        } else {
            console.log("Lista jest pusta");
        }
    })
    button3.addEventListener("click", e => {
        if (shopping.children.length >= 2) {
            const clone = shopping.children[1].cloneNode(true); // true - klonuje z zawartością false - klonuje samą komórkę
            shopping.append(clone);
        } else {
            console.log("Lista zawiera jeden lub mniej produktów");

        }

    })

})