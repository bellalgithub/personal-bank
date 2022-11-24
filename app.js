


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
    const depositNumber = parseFloat(depositAmount);
    const currentDeposit = document.getElementById('currentAmount').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    const totalDeposit = depositNumber + currentDepositNumber;
    document.getElementById('currentAmount').innerText = totalDeposit;
    document.getElementById('depositAmount').value = ''

})


