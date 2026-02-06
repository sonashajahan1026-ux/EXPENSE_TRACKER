let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

displayExpenses();

// Add Expense
function addExpense(){

    let title = document.getElementById("title").value;
    let amount = document.getElementById("amount").value;
    let category = document.getElementById("category").value;
    

    if(title === "" || amount === "" || category === ""){
        alert("Please fill all fields");
        return;
    }

    let expense = {
        title,
        amount: Number(amount),
        category
    };

    expenses.push(expense);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    clearForm();
    displayExpenses();
}

// Display Expenses
function displayExpenses(){

    let list = document.getElementById("expenseList");
    list.innerHTML = "";

    let total = 0;

    expenses.forEach((expense,index)=>{

        total += expense.amount;

        list.innerHTML += `
            <tr>
                <td>${expense.title}</td>
                <td>₹ ${expense.amount}</td>
                <td>${expense.category}</td>
                <td>
                    <button class="btn btn-danger btn-sm"
                    onclick="deleteExpense(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    document.getElementById("total").innerText = total;
}

// Delete Expense
function deleteExpense(index){

    expenses.splice(index,1);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    displayExpenses();
}

// Clear Form
function clearForm(){
    document.getElementById("title").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";
}
