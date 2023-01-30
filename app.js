function getAmount(id) {
    const element = document.getElementById(id);
    const elementString = element.value;
    const resultAmount = parseFloat(elementString);
    return resultAmount;
}

function getInnerTextAmount(elementID, result) {
    const element = document.getElementById(elementID);
    element.innerText = result;
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    const FirstIncome = getAmount('total-income');
    const foodsExpense = getAmount('foods');
    const rentExpense = getAmount('rents');
    const clothesExpense = getAmount('clothes');
    const totalExpense = foodsExpense + rentExpense + clothesExpense;
    getInnerTextAmount('total-expense', totalExpense);
    if (FirstIncome > totalExpense) {
        const totalBalance = FirstIncome - totalExpense;
        getInnerTextAmount('total-balance', totalBalance);
    }
    else {
        alert('Your expnese is more than your income');
    }

})
document.getElementById('save-btn').addEventListener('click', function () {
    // first Income get
    const firstIncome = getAmount('total-income');
    // get the saving perchantage
    const savingPerchantage = getAmount('total-save');
    if (savingPerchantage < 100) {
        const savingAmount = firstIncome * savingPerchantage / 100;
        // add the saving amount in the result area
        getInnerTextAmount('saving-amount', savingAmount)
        // Remaining Balance
    }
    else {
        alert('you cant save 100% of your income! ')
    }

    const totalBalanceArea = document.getElementById('total-balance');
    const totalBalanceAreaString = totalBalanceArea.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAreaString);
    const remainingBalance = totalBalanceAmount - savingAmount;
    // add remaining balance in the result area
    getInnerTextAmount('remaining-balance', remainingBalance)

})

/*--without function---*/
// document.getElementById('calculate-btn').addEventListener('click', function () {
//     // first income 10000 taka get
//     const incomeElement = document.getElementById('total-income');
//     const incomeElementString = incomeElement.value;
//     const FirstIncome = parseFloat(incomeElementString);

//     // const FirstIncome = getAmount('total-income');

//     // Expenses getting
//     // foods
//     const foodsElement = document.getElementById('foods');
//     const foodElementString = foodsElement.value;
//     const foodsExpense = parseFloat(foodElementString);
//     // const foodsExpense = getAmount('foods');

//     // rents
//     const rentsElement = document.getElementById('rents');
//     const rentsElementString = rentsElement.value;
//     const rentExpense = parseFloat(rentsElementString);
//     // const rentExpense = getAmount('rents');
//     // clothes
//     const clothesElement = document.getElementById('clothes');
//     const clothesElementString = clothesElement.value;
//     const clothesExpense = parseFloat(clothesElementString);
//     // const clothesExpense = getAmount('clothes');
//     // total Expense
//     const totalExpense = foodsExpense + rentExpense + clothesExpense;
//     // add the expenses in the result
//     const totalExpenseElement = document.getElementById('total-expense');
//     totalExpenseElement.innerText = totalExpense;
//     // getInnerTextAmount('total-expense', totalExpense);
//     // after the expenses the total balance
//     const totalBalance = FirstIncome - totalExpense;
//     const totalBalanceElement = document.getElementById('total-balance');
//     totalBalanceElement.innerText = totalBalance;
//     // getInnerTextAmount('total-balance', totalBalance);

// })

// document.getElementById('save-btn').addEventListener('click', function () {
//     // first Income get
//     const incomeElement = document.getElementById('total-income');
//     const incomeElementString = incomeElement.value;
//     const FirstIncome = parseFloat(incomeElementString);
//     // get the saving perchantage
//     const savingElement = document.getElementById('total-save');
//     const savingElementString = savingElement.value;
//     const savingPerchantage = parseFloat(savingElementString);
//     const savingAmount = FirstIncome * savingPerchantage / 100;
//     // add the saving amount in the result area
//     const savingTotal = document.getElementById('saving-amount');
//     savingTotal.innerText = savingAmount;
//     // Remaining Balance
//     const totalBalanceArea = document.getElementById('total-balance');
//     const totalBalanceAreaString = totalBalanceArea.innerText;
//     const totalBalanceAmount = parseFloat(totalBalanceAreaString);
//     const remainingBalance = totalBalanceAmount - savingAmount;
//     // add remaining balance in the result area
//     const remainingBlaanceArea = document.getElementById('remaining-balance');
//     remainingBlaanceArea.innerText = remainingBalance;
// })