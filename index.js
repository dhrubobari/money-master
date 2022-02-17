document.getElementById('calculate-button').addEventListener('click', function(){
    const incomeInput = document.getElementById('income-input');
    const incomeAmountText = incomeInput.value;
    const incomeAmount = parseFloat(incomeAmountText);

//    
    const rentInput = document.getElementById('rent-input');
    const rentPerMonth = rentInput.value;
    const rentAmount = parseFloat(rentPerMonth);
    
//
const foodInput = document.getElementById('food-input');
    const foodExpenseText = foodInput.value;
    const foodExpense = parseFloat(foodExpenseText);

//    
const insurance = document.getElementById('insurance-input')
const insuranceText = insurance.value;
const insuranceExpense = parseFloat(insuranceText);

//
const expenseTotal = document.getElementById('expense-total');
const expenseTotalText = expenseTotal.innerText;
const totalExpense = parseFloat(expenseTotalText);

expenseTotal.innerText = rentAmount + foodExpense + insuranceExpense + totalExpense;
});

function incomeField(){
    
}