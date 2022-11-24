


// Login button Event Handeler

const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function () {


    const loginArea = document.getElementById('login-section');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = 'block';

})

// Deposit button event handler

const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {

    const depositAmount = document.getElementById('depositAmount').value;
    const depositAmountNumber = parseFloat(depositAmount);

    // const currentDepositAmount = document.getElementById('currentAmount').innerText;
    // const currentDepositAmountNumber = parseFloat(currentDepositAmount);

    spanTextUpdate('currentDepositAmount', depositAmountNumber);  /* function invoked */
    spanTextUpdate('currentBalanceAmount', depositAmountNumber);   /* function invoked */


    /*  const totalDeposit = depositAmountNumber + currentDepositAmountNumber;
     document.getElementById('currentAmount').innerText = totalDeposit; */
    document.getElementById('currentDepositAmount').value = " ";

    /* const currentBlance = document.getElementById('currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBlance);
    const totalCurrentBalanceNumber = currentBalanceNumber + depositAmountNumber;
    document.getElementById('currentBalance').innerText = totalCurrentBalanceNumber;
 */



})

// With function simplified----------- Deposit button event handler

function spanTextUpdate(id, depositAmountNumber) {

    const current = document.getElementById(id).innerText;
    const currentAmountNumber = parseFloat(current);
    const totalAmount = currentAmountNumber + depositAmountNumber;
    document.getElementById(id).innerText = totalAmount;

}

// Witdraw button event handler

const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function () {



    const withDrawAmount = document.getElementById('addWithdraw').value;
    const withDrawAmountNumber = parseFloat(withDrawAmount);
    console.log(withDrawAmountNumber);

    spanTextUpdateWithDraw('currentWithdrawAmount', withDrawAmountNumber);
    spanTextUpdateWithDraw('currentBalanceAmount', -1 * withDrawAmountNumber);
})

function spanTextUpdateWithDraw(id, withDrawAmountNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + withDrawAmountNumber;

    document.getElementById(id).innerText = totalAmount;

}

