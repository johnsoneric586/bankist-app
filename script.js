'use strict';

// ---------DOM variables----------
const loginForm = document.querySelector('.login');
const fieldUsername = document.getElementById('username');
const fieldPassword = document.getElementById('password');
const btnLogin = document.querySelector('.btn_login');
const btnLogout = document.querySelector('.btn_logout');
const quote = document.querySelector('.quote');
const mainUI = document.querySelector('.main_UI');
const mainHeader = document.querySelector('h1');
// Main header initial value (so we can revert later)
const mainHeaderTextDefault = mainHeader.textContent;
const balanceEl = document.getElementById('balance');
const accountMovementsDiv = document.querySelector('.account_movements');
const clock = document.getElementById('clock');

// Movements Summary Variables
const totalDepositsEl = document.getElementById('total_deposits');
const totalWithdrawalsEl = document.getElementById('total_withdrawals');
const interestPercentageEl = document.getElementById('interest_percentage');
const interestAmountEl = document.getElementById('interest_amount');
const btnSort = document.querySelector('.movements_sort');

// ----------Transfer variables----------
const btnTransferRequest = document.getElementById('transfer_type_request');
const btnTransferSend = document.getElementById('transfer_type_send');

const transferRequestContainer = document.querySelector(
  '.transfer_request_container'
);
const transferSendContainer = document.querySelector('.transfer_to_container');
const fieldTransferRequestFrom = document.getElementById(
  'transfer_request_name'
);
const fieldTransferTo = document.getElementById('transfer_to_name');
const fieldTransferAmount = document.getElementById('transfer_amount');
const btnTransferSubmit = document.querySelector('.btn_transfer_submit');
const transferRequestModalBackdrop = document.querySelector(
  '.transfer_request_modal_backdrop'
);
const transferRequestModal = document.querySelector('.transfer_request_modal');
const transferRequestModalName = document.getElementById('request_modal_name');
const transferRequestModalAmount = document.getElementById(
  'request_modal_amount'
);
const btnTransferRequestApprove = document.getElementById('transfer_approve');
const btnTransferRequestDeny = document.getElementById('transfer_deny');
const transferRequestConfirmModalBackdrop = document.querySelector(
  '.transfer_requested_confirmation_backdrop'
);
const transferRequestConfirmModal = document.querySelector(
  '.transfer_requested_confirmation_modal'
);
const btnTransferRequestConfirm = document.querySelector(
  '.transfer_confirm_ok'
);
const transferModalConfirmAmount = document.getElementById(
  'transfer_modal_confirm_amount'
);
const transferModalConfirmName = document.getElementById(
  'transfer_modal_confirm_name'
);
const transferReceivedModalBackdrop = document.querySelector(
  '.transfer_received_modal_backdrop'
);
const transferReceivedModal = document.querySelector(
  '.transfer_received_modal'
);
const transferReceivedFromName = document.getElementById(
  'transfer_received_from_name'
);
const transferReceivedAmount = document.getElementById(
  'transfer_received_amount'
);
const btnTransferReceivedOk = document.getElementById('transfer_received_ok');
// ---------- Loan variables ----------
const fieldLoanAmount = document.getElementById('loan_amount');
const btnLoanRequest = document.querySelector('.btn_loan_submit');
// ---------- Close account variables ----------
const fieldCloseAcountPassword = document.getElementById(
  'close_account_password_field'
);
const btnCloseAccount = document.querySelector('.btn_close_account');
const closeAccountModalBackdrop = document.querySelector(
  '.close_Account_modal_backdrop'
);
const closeAccountModal = document.querySelector('.close_account_modal');
const btnCloseAccountModalYes = document.getElementById('close_account_yes');
const btnCloseAccountModalNo = document.getElementById('close_account_no');
// ---------- Logout timer variables ----------
const logoutTimer = document.getElementById('logout_timer');

// ------------------Regular variables---------------
const accounts = [
  {
    firstName: 'Eric',
    lastName: 'Johnson',
    password: '123',
    interestRate: 2.75,
    requestPending: false,
    transferReceived: false,
    movements: [
      {
        amount: 2700,
        date: new Date(2024, 1, 1),
      },
      {
        amount: 1000,
        date: new Date(2024, 1, 11),
      },
      {
        amount: -27.66,
        date: new Date(2024, 1, 11),
      },
      {
        amount: -50.01,
        date: new Date(2024, 1, 12),
      },
      {
        amount: -235,
        date: new Date(2024, 1, 12),
      },
      {
        amount: 2700,
        date: new Date(2024, 1, 15),
      },
      {
        amount: -560.74,
        date: new Date(2024, 1, 25),
      },
      {
        amount: -333.11,
        date: new Date(2024, 1, 26),
      },
      {
        amount: -23.55,
        date: new Date(2024, 1, 27),
      },
      {
        amount: -6.99,
        date: new Date(2024, 1, 29),
      },
      {
        amount: 2700,
        date: new Date(2024, 1, 29),
      },
    ],
  },
  {
    firstName: 'Arden',
    lastName: 'Edelen',
    password: '321',
    interestRate: 2.2,
    requestPending: false,
    transferReceived: false,
    movements: [
      {
        amount: 3300,
        date: new Date(2024, 1, 1),
      },
      {
        amount: -1000,
        date: new Date(2024, 1, 11),
      },
      {
        amount: -56.54,
        date: new Date(2024, 1, 11),
      },
      {
        amount: -1.99,
        date: new Date(2024, 1, 12),
      },
      {
        amount: -235.67,
        date: new Date(2024, 1, 15),
      },
      {
        amount: 3300,
        date: new Date(2024, 1, 15),
      },
      {
        amount: -560.11,
        date: new Date(2024, 1, 19),
      },
      {
        amount: -333.33,
        date: new Date(2024, 1, 20),
      },
      {
        amount: -23.5,
        date: new Date(2024, 1, 27),
      },
      {
        amount: -99.99,
        date: new Date(2024, 1, 27),
      },
      {
        amount: 3300,
        date: new Date(2024, 1, 29),
      },
    ],
  },
  {
    firstName: 'Kim',
    lastName: 'Royce',
    password: '789',
    interestRate: 1.5,
    requestPending: false,
    transferReceived: false,
    movements: [
      {
        amount: 6600,
        date: new Date(2024, 1, 1),
      },
      {
        amount: -1.6,
        date: new Date(2024, 1, 9),
      },
      {
        amount: -1.99,
        date: new Date(2024, 1, 12),
      },
      {
        amount: -240,
        date: new Date(2024, 1, 16),
      },
      {
        amount: 6600,
        date: new Date(2024, 1, 15),
      },
      {
        amount: -650.79,
        date: new Date(2024, 1, 19),
      },
      {
        amount: -333.33,
        date: new Date(2024, 1, 21),
      },
      {
        amount: -19.99,
        date: new Date(2024, 1, 28),
      },
      {
        amount: -99.99,
        date: new Date(2024, 1, 29),
      },
      {
        amount: 6600,
        date: new Date(2024, 1, 29),
      },
    ],
  },
  {
    firstName: 'Emily',
    lastName: 'Smith',
    password: '987',
    interestRate: 3.7,
    requestPending: false,
    transferReceived: false,
    movements: [
      {
        amount: 8900.55,
        date: new Date(2024, 1, 1),
      },
      {
        amount: 580,
        date: new Date(2024, 1, 8),
      },
      {
        amount: -35.67,
        date: new Date(2024, 1, 8),
      },
      {
        amount: -430.99,
        date: new Date(2024, 1, 8),
      },
      {
        amount: -24.58,
        date: new Date(2024, 1, 9),
      },
      {
        amount: -670.32,
        date: new Date(2024, 1, 10),
      },
      {
        amount: -8.37,
        date: new Date(2024, 1, 10),
      },
      {
        amount: 42,
        date: new Date(2024, 1, 12),
      },
      {
        amount: -11.14,
        date: new Date(2024, 1, 13),
      },
      {
        amount: -6.5,
        date: new Date(2024, 1, 14),
      },
      {
        amount: 8900.55,
        date: new Date(2024, 1, 15),
      },
      {
        amount: -700,
        date: new Date(2024, 1, 17),
      },
      {
        amount: -23.11,
        date: new Date(2024, 1, 17),
      },
      {
        amount: -11.14,
        date: new Date(2024, 1, 18),
      },
      {
        amount: -9.99,
        date: new Date(2024, 1, 19),
      },
      {
        amount: -5.43,
        date: new Date(2024, 1, 19),
      },
      {
        amount: 50,
        date: new Date(2024, 1, 21),
      },
      {
        amount: -63.77,
        date: new Date(2024, 1, 23),
      },
      {
        amount: -121.23,
        date: new Date(2024, 1, 25),
      },
      {
        amount: -400.2,
        date: new Date(2024, 1, 27),
      },
      {
        amount: 8900.55,
        date: new Date(2024, 1, 30),
      },
    ],
  },
];

//   Creating days of week array because currentTime.getDay() returns a 0-based number
const daysOfWeekArr = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

let currentAccount;

// Create username based on first and last name
accounts.forEach(acc => {
  acc.username =
    acc.firstName.slice(0, 1).toLowerCase() + acc.lastName.toLowerCase();
});

// ----------------------Functions-------------------------

function updateClock() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const month = currentTime.getMonth() + 1;
  const year = currentTime.getFullYear();
  const day = currentTime.getDate();
  const dayOfWeek = currentTime.getDay();

  // Arrow function to format dates
  const dateFormatter = number => number.toString().padStart(2, 0);

  const clockStr = `${daysOfWeekArr[dayOfWeek]}, ${dateFormatter(
    month
  )}/${dateFormatter(day)}/${year}, at ${dateFormatter(hour)}:${dateFormatter(
    minute
  )}:${dateFormatter(second)}`;

  // Display the clock
  clock.textContent = clockStr;
}

// Immediately call the update clock string
updateClock();
// Update the clock every second
setInterval(updateClock, 1000);

// Display account movements
function displayMovements(acc) {
  acc.movements.forEach(movement => {
    const month = movement.date.getMonth();
    const day = movement.date.getDate();
    const year = movement.date.getFullYear();
    const movementDateStr = `${month}/${day}/${year}`;
    let currentTimeStamp = new Date().getTime();
    const daysPassed = Math.round(
      (currentTimeStamp - movement.date.getTime()) / (1000 * 24 * 60 * 60)
    );

    // Show movement array objects in the account movements section
    const html = `<div class="movement movement_${
      movement.amount > 0 ? 'deposit' : 'withdrawal'
    }">
          <div class="movement_main_info">
            <h3 class="movement_type">${
              movement.amount > 0 ? 'Deposit' : 'Withdrawal'
            }</h3>
            <p class="movement_amount">$${Math.abs(movement.amount).toFixed(
              2
            )}</p>
          </div>
          <div class="movement_date_container">
            <p class="movement_date">${
              daysPassed <= 3 ? daysPassed + ' days ago' : movementDateStr
            }</p>
          </div>`;

    document;
    accountMovementsDiv.insertAdjacentHTML('afterbegin', html);
  });
}

let balance;

function displayBalance(account) {
  // Display the balance based on the current account's movement amount totals
  balance = account.movements
    .map(movement => movement.amount)
    .reduce((accumulator, currValue) => (accumulator += currValue))
    .toFixed(2);

  balanceEl.textContent = '$' + balance;
}

function displayTotalDeposits(account) {
  //   Display the total deposits
  const totalDeposits = Number(
    account.movements
      .map(movement => movement.amount)
      .filter(movement => movement > 0)
      .reduce((accumulator, currentValue) => (accumulator += currentValue))
  ).toFixed(2, 0);

  totalDepositsEl.textContent = '$' + totalDeposits;
}

function displayTotalWithdrawals(account) {
  totalWithdrawalsEl.textContent =
    '$' +
    Math.abs(
      account.movements
        .map(movement => movement.amount)
        .filter(movement => movement <= 0)
        .reduce((accumulator, currentValue) => (accumulator += currentValue))
        .toFixed(2)
    );
}

function displayInterestRate(account) {
  interestPercentageEl.textContent = account.interestRate.toFixed(2) + '%';
}

function calcTotalInterest(account) {
  const interestTotalStr = String(
    (balance * (account.interestRate / 100)).toFixed(2)
  );

  interestAmountEl.textContent = '$' + interestTotalStr;
}

let timer;
// Define the logout timer function
function startLogoutTimer() {
  let time = 300;

  function tick() {
    const minute = String(Math.floor(time / 60)).padStart(1, '0');
    const second = String(time % 60).padStart(2, '0');

    logoutTimer.textContent = `${minute}:${second}`;
    time--;

    // If timer reaches 0, reset the timer and log the user out
    if (time < 0) {
      clearInterval(timer); // Stop the timer
      logout(); // Log the user out
    }
  }

  // If timer is already running and the startLogoutTimer function is called, stop the timer
  if (timer) clearInterval(timer);

  tick(); // Call tick immediately
  timer = setInterval(tick, 1000); // Call tick every 1 second
}

// ----------Login function-----------
function login(event) {
  event.preventDefault();
  if (
    // If username & password fields match the accounts array
    accounts.some(
      acc =>
        acc.username === fieldUsername.value &&
        acc.password === fieldPassword.value
    )
  ) {
    // Assign current account variable based on conditions
    currentAccount = accounts.find(
      acc =>
        acc.username === fieldUsername.value &&
        acc.password === fieldPassword.value
    );
    // Show UI
    mainUI.style.opacity = '1';
    // Hide quote
    quote.style.display = 'none';
    // Greet the user in the header
    mainHeader.textContent = `Hello, ${currentAccount.firstName}`;
    // Hide the login form and show the logout button
    loginForm.style.display = 'none';
    btnLogout.style.display = 'block';

    // Clear the default movement HTML so it only displays the movements from the movement array for the current account
    accountMovementsDiv.innerHTML = '';

    displayBalance(currentAccount);

    displayMovements(currentAccount);

    displayTotalDeposits(currentAccount);

    displayTotalWithdrawals(currentAccount);

    displayInterestRate(currentAccount);

    calcTotalInterest(currentAccount);

    // Start the logout timer as soon as someone logs in
    startLogoutTimer();

    // Check if there's a pending transfer request.
    if (currentAccount.requestPending === true) {
      transferRequestModalName.textContent = requestedFrom;
      transferRequestModalAmount.textContent = requestTransferAmount;
      transferRequestModalBackdrop.style.display = 'block';
      transferRequestModal.style.display = 'flex';
    }

    if (currentAccount.transferReceived === true) {
      // Show the modal
      transferReceivedModalBackdrop.classList.remove('display_none');
      transferReceivedModal.classList.remove('display_none');
      transferReceivedFromName.textContent = transferSentFrom;
      transferReceivedAmount.textContent = sendTransferAmount;
    }
  } else {
    alert('Invalid username or password.');

    //   Clear input fields
    fieldUsername.value = '';
    fieldPassword.value = '';
    //   Remove cursor from input field
    document.activeElement.blur();
  }
}

// ----------Logout function----------
function logout() {
  //   Set current account back to empty
  currentAccount = '';
  // Hide UI
  mainUI.style.opacity = '0';
  //   Display quote
  quote.style.display = '';
  //   Set the main header back to the default
  mainHeader.textContent = mainHeaderTextDefault;
  //   Show login form
  loginForm.style.display = '';
  // Hide logout button
  btnLogout.style.display = '';

  //   Clear input fields
  fieldUsername.value = '';
  fieldPassword.value = '';
  //   Remove cursor from input field
  document.activeElement.blur();
}

// Sort movements based on unix epoch timestamp
// When the sort button is clicked, we sort by either most recent or the opposite
let sorted = false;
function movementSort() {
  // Clear the movements section element so it won't chain them
  accountMovementsDiv.innerHTML = '';
  if (!sorted) {
    currentAccount.movements.sort((a, b) => b.date - a.date);
    sorted = true;
  } else if (sorted) {
    currentAccount.movements.sort((a, b) => a.date - b.date);
    sorted = false;
  }
  displayMovements(currentAccount);
  btnSort.textContent = sorted ? '↓Sort' : '↑Sort';

  // Restart time logout timer if it's running
  startLogoutTimer();
}

// ----------Transfer functions----------
let requestTransferAmount;
let requestedFrom;

function requestTransfer() {
  //   Check if the username entered in the "request from" field exists in the accounts array.
  const requestedAccount = accounts.find(
    account => account.username === fieldTransferRequestFrom.value
  );

  if (!requestedAccount) {
    alert('The account you are requesting from does not exist.');
    fieldTransferRequestFrom.value = '';
    fieldTransferAmount.value = '';
    document.activeElement.blur();
    return; // Exit the function early
  }

  if (
    fieldTransferAmount.value > 0 &&
    btnTransferRequest.checked &&
    fieldTransferRequestFrom.value !== currentAccount.username
  ) {
    // Proceed with the transfer request
    // Set the requestedFrom and transferAmount variables
    requestedFrom = currentAccount.username;
    requestTransferAmount = Number(fieldTransferAmount.value);

    // set the requested account's "requestPending" property to true.
    requestedAccount.requestPending = true;

    // Show the modal and update its content
    transferRequestConfirmModalBackdrop.classList.remove('display_none');
    transferRequestConfirmModal.classList.remove('display_none');
    transferModalConfirmAmount.textContent = requestTransferAmount;
    transferModalConfirmName.textContent = requestedAccount.username;
  } else if (fieldTransferRequestFrom.value === currentAccount.username) {
    alert('Cannot request transfer from the current account.');
  } else if (fieldTransferAmount.value <= 0) {
    alert('Transfer amount must be greater than 0.');
  }
  // Clearing input fields and taking focus off selected elements after clicking submit.
  fieldTransferRequestFrom.value = '';
  fieldTransferTo.value = '';
  fieldTransferAmount.value = '';
  document.activeElement.blur();

  // Restarting the logout timer
  startLogoutTimer();
}

let sendTransferAmount;
let transferTo;
let transferSentFrom = '';

function sendTransfer() {
  const referencedAccount = accounts.find(
    account => account.username === fieldTransferTo.value
  );

  //   "transfer to" value must match an existing account username from the "accounts" array
  if (!referencedAccount) {
    alert('The account you are attempting to transfer to does not exist.');
    //   Clear "transfer to" field
    fieldTransferTo.value = '';
    //   Remove cursor from input field
    document.activeElement.blur();
    return; // Exit the function early
  }

  //   "transfer to" field cannot match the current account username
  if (fieldTransferTo.value === currentAccount.username) {
    alert('Cannot transfer to current account.');
    //   Clear "transfer to" field
    fieldTransferTo.value = '';
    // Clear transfer amount field
    fieldTransferAmount.value = '';
    //   Remove cursor from input field
    document.activeElement.blur();
    return; // Exit the function early
  }

  //   Transfer amount cannot be greater than the current account balance
  if (Number(fieldTransferAmount.value) > balance) {
    alert('Insufficient funds to complete transfer.');
    //   Clear "transfer to" field
    fieldTransferTo.value = '';
    //    Clear "amount" field
    fieldTransferAmount.value = '';
    //   Remove cursor from input field
    document.activeElement.blur();
    return; // Exit the function early
  }

  //   Transfer amount must be greater than 0
  if (Number(fieldTransferAmount.value) < 0) {
    alert('Transfer amount must be greater than 0.');
    //    Clear "amount" field
    fieldTransferAmount.value = '';
    //   Remove cursor from input field
    document.activeElement.blur();
    return; // Exit the function early
  }

  transferTo = accounts.find(
    account => account.username === fieldTransferTo.value
  );

  sendTransferAmount = Number(fieldTransferAmount.value);

  //   Add the withdrawal to the current account
  currentAccount.movements.push({
    amount: sendTransferAmount * -1,
    date: new Date(),
  });

  //   Add the transfer to the target account
  transferTo.movements.push({
    amount: sendTransferAmount,
    date: new Date(),
  });

  transferSentFrom = currentAccount.username;
  transferTo.transferReceived = true;

  alert(`You transferred $${sendTransferAmount} to ${transferTo.username}.`);

  //   Update current account's balance, movements, and account info after the transfer
  accountMovementsDiv.innerHTML = '';

  displayBalance(currentAccount);

  displayMovements(currentAccount);

  displayTotalDeposits(currentAccount);

  displayTotalWithdrawals(currentAccount);

  displayInterestRate(currentAccount);

  calcTotalInterest(currentAccount);

  fieldTransferAmount.value = '';
  fieldTransferTo.value = '';
  document.activeElement.blur();

  // Restart the logout timer
  startLogoutTimer();
}

let loanAmount = '';
function requestLoan(event) {
  event.preventDefault();

  loanAmount = Number(fieldLoanAmount.value);

  // Filter only movements with positive amounts
  // Map a new array with only those positive ammount properties
  const currentAccountDeposits = currentAccount.movements
    .filter(movement => movement.amount > 0)
    .map(movement => movement.amount);

  // Define the lowest deposit
  let minDeposit = currentAccountDeposits[0];
  currentAccountDeposits.forEach(deposit => {
    if (deposit < minDeposit) minDeposit = deposit;
  });

  // If loan amount is less than 10% of smallest deposit
  if (loanAmount < minDeposit * 0.1) {
    alert('Loan amount must be at least 10% of the smallest deposit.');
    fieldLoanAmount.value = '';
    document.activeElement.blur();
    return; // Exit the function early
  }

  alert('Your loan request has been submitted.');

  // Set a 5 second delay if the loan is accepted.
  // This simulates a loan approval process.
  setTimeout(function () {
    alert(`Loan amount $${loanAmount} approved.`);

    currentAccount.movements.push({
      amount: loanAmount,
      date: new Date(),
    });

    // Update the UI
    accountMovementsDiv.innerHTML = '';
    displayBalance(currentAccount);
    displayMovements(currentAccount);
    displayTotalDeposits(currentAccount);
    displayTotalWithdrawals(currentAccount);
    displayInterestRate(currentAccount);
    calcTotalInterest(currentAccount);
  }, 5000);

  // Clear the input field
  fieldLoanAmount.value = '';
  document.activeElement.blur();

  // Restart the logout timer
  startLogoutTimer();
}

function closeAccount() {
  const currAccountIndex = accounts.findIndex(
    account => account === currentAccount
  );

  // Remove the current account from the accounts array after a 3 sec delay
  accounts.splice(currAccountIndex, 1);
  // setTimeout(accounts.splice(currAccountIndex, 1), 3000);

  // Hide the modal because it will still be visible if another account logs in
  closeAccountModalBackdrop.classList.add('display_none');
  closeAccountModal.classList.add('display_none');

  // Clear close account input fields
  fieldCloseAcountPassword.value = '';

  // Log the user out
  logout();
}

function resetLogoutTimer() {
  console.log('Timer reset.');
}

// --------------------Event listeners--------------------
btnLogin.addEventListener('click', login);
btnLogout.addEventListener('click', logout);
btnSort.addEventListener('click', movementSort);

// ----------Transfer Event Listeners----------
btnTransferRequest.addEventListener('change', function () {
  transferRequestContainer.style.display = 'flex';
  transferSendContainer.style.display = 'none';

  // Restart the logout timer
  startLogoutTimer();
});

btnTransferSend.addEventListener('change', function () {
  transferSendContainer.style.display = 'flex';
  transferRequestContainer.style.display = 'none';

  // Restart the logout timer
  startLogoutTimer();
});

btnTransferSubmit.addEventListener('click', function (event) {
  event.preventDefault();
  if (btnTransferRequest.checked) {
    requestTransfer();
  } else if (btnTransferSend.checked) {
    sendTransfer();
  }
});

// When request "ok" button is clicked, close the modal.
btnTransferRequestConfirm.addEventListener('click', function () {
  transferRequestConfirmModalBackdrop.classList.add('display_none');
  transferRequestConfirmModal.classList.add('display_none');

  // Restart the logout timer
  startLogoutTimer();
});

// When transfer received modal's "ok" button is clicked, close the modal
btnTransferReceivedOk.addEventListener('click', function () {
  transferReceivedModalBackdrop.classList.add('display_none');
  transferReceivedModal.classList.add('display_none');
  currentAccount.transferReceived = false;

  // Restart the logout timer
  startLogoutTimer();
});

// When transfer "approve" is clicked.
btnTransferRequestApprove.addEventListener('click', function () {
  // If transfer amount is greater than current account balance.
  if (Number(requestTransferAmount) > Number(balance)) {
    // Alert "insufficient funds."
    alert('Insufficient funds to complete transfer!');
    // Set request pending back to false.
    currentAccount.requestPending = false;

    //   Close the modal
    transferRequestModalBackdrop.style.display = 'none';
    transferRequestModal.style.display = 'none';
  } else {
    //   Add the withdrawal to the current logged in account.
    currentAccount.movements.push({
      amount: requestTransferAmount * -1,
      date: new Date(),
    });

    const requestedFromAccount = accounts.find(
      account => account.username === requestedFrom
    );

    //   Add the deposit to the movements array for the user requesting the transfer.
    requestedFromAccount.movements.push({
      amount: +requestTransferAmount,
      date: new Date(),
    });

    accountMovementsDiv.innerHTML = '';

    displayBalance(currentAccount);

    displayMovements(currentAccount);

    displayTotalDeposits(currentAccount);

    displayTotalWithdrawals(currentAccount);

    displayInterestRate(currentAccount);

    calcTotalInterest(currentAccount);

    // Set request pending back to false.
    currentAccount.requestPending = false;

    //   Close the modal
    transferRequestModalBackdrop.style.display = 'none';
    transferRequestModal.style.display = 'none';
  }

  // Restart the logout timer
  startLogoutTimer();
});

// When transfer "deny" is clicked.
btnTransferRequestDeny.addEventListener('click', function () {
  // Set request pending back to false.
  currentAccount.requestPending = false;

  //   Close the modal
  transferRequestModalBackdrop.style.display = 'none';
  transferRequestModal.style.display = 'none';

  // Restart the logout timer
  startLogoutTimer();
});

// ----- Loan event listener -----
btnLoanRequest.addEventListener('click', requestLoan);

// ----- Close account event listeners -----
// If password field value matches the password for the current account, execute the closeAccount function.
btnCloseAccount.addEventListener('click', function (event) {
  event.preventDefault(); // Stop the page from reloading

  if (fieldCloseAcountPassword.value === '') {
    alert('You must enter your password to close your account.');
    document.activeElement.blur();
    return; // Exit the function early
  }

  if (fieldCloseAcountPassword.value !== currentAccount.password) {
    alert('Password is incorrect.');
    fieldCloseAcountPassword.value = '';
    document.activeElement.blur();
    return; // Exit the function early
  }

  // Display the close account modal
  closeAccountModalBackdrop.classList.remove('display_none');
  closeAccountModal.classList.remove('display_none');
});

btnCloseAccountModalYes.addEventListener('click', closeAccount);

btnCloseAccountModalNo.addEventListener('click', function () {
  // Clear the close account password field and remove focus
  fieldCloseAcountPassword.value = '';
  document.activeElement.blur();
  // Hide the "close account" modal
  closeAccountModalBackdrop.classList.add('display_none');
  closeAccountModal.classList.add('display_none');
});

// TODO finish UI styles. Pretty much all JS is done :)
