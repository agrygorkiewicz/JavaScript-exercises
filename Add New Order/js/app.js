
document.addEventListener('DOMContentLoaded', () => {
    const order = document.querySelector("#orderId");
    const item = document.querySelector("#item");
    const quantity = document.querySelector("#quantity");
    const btn = document.querySelector("#add");
    const table = document.querySelector("#orders tbody");


    btn.addEventListener("click", e => {

        const tr = document.createElement("tr");

        tr.innerHTML = `<td>
${order.value}
      </td>
      <td>
       ${item.value}
      </td>
      <td>
        ${quantity.value}
      </td>`

        table.appendChild(tr);

    })
});
