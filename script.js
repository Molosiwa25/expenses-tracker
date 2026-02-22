let total = 0;

function addExpense() {
    const desc = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);

    if (desc === "" || isNaN(amount)) {
        alert("Please enter valid data");
        return;
    }

    total += amount;
    document.getElementById("total").textContent = total.toFixed(2);

    const li = document.createElement("li");
    li.innerHTML = `${desc} - R${amount} <button onclick="deleteExpense(this, ${amount})">X</button>`;

    document.getElementById("expense-list").appendChild(li);

    document.getElementById("description").value = "";
    document.getElementById("amount").value = "";
}

function deleteExpense(button, amount) {
    total -= amount;
    document.getElementById("total").textContent = total.toFixed(2);

    button.parentElement.remove();
}