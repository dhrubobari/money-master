document.getElementById('calculate-button').addEventListener('click', function(){
// income field
const incomeTotal = document.getElementById('income-input');
const incomeText = incomeTotal.value;
const totalIncome = parseFloat(incomeText);

// rent input
    const rentInput = document.getElementById('rent-input');
    const rentPerMonth = rentInput.value;
    const rentAmount = parseFloat(rentPerMonth);
    
// food input
const foodInput = document.getElementById('food-input');
    const foodExpenseText = foodInput.value;
    const foodExpense = parseFloat(foodExpenseText);

// insurance input
const insurance = document.getElementById('insurance-input')
const insuranceText = insurance.value;
const insuranceExpense = parseFloat(insuranceText);

// balance total
const balanceTotal = document.getElementById('balance-total');
const balanceText = balanceTotal.innerText;
const totalBalance = parseFloat(balanceText);

// expense input
const expenseTotal = document.getElementById('expense-total');
const expenseText = expenseTotal.innerText;
const totalExpense = parseFloat(expenseText);

// calculation
expenseTotal.innerText = rentAmount + foodExpense + insuranceExpense;
balanceTotal.innerText = totalIncome - totalExpense - totalBalance;
});

