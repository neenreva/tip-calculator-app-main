// Selectors
const totalBill = document.querySelector(".bill-total");
const tipPercent = document.querySelectorAll(".tip-percent");
const people = document.querySelector(".divide");
const tipPerPerson = document.querySelector(".tip-pp");
const totalPerPerson = document.querySelector(".total-pp");
const customTip = document.querySelector(".custom-tip");
const resetParams = document.querySelector(".reset");

// Varibles
let percent;
let tip;
let tipAmount;
let total;

//Main function for the calculations
function calcNums() {
  if (people.value > 0) {
    tip = (totalBill.value * percent).toFixed(2);
    tipAmount = tip / people.value;
    total = tipAmount + totalBill.value / people.value;
    tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
    totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
  }

  if (percent === undefined) {
    tipPerPerson.innerHTML = "$0.00";
    totalPerPerson.innerHTML = "$0.00";
  }
}

//Tip buttons
tipPercent.forEach((btn) => {
  btn.addEventListener("click", tipBtns);
});

// Loop through the tip buttons and add the active-btn class to the current/clicked button

function tipBtns(e) {
  percent = this.value * 0.01;
  console.log(percent);
  tipPercent.forEach((btn) => {
    btn.classList.remove("active-btn");
    e.currentTarget.classList.add("active-btn");
    calcNums();
  });
}

//Custom Tip
customTip.addEventListener("keyup", customIpt);
// customTip.addEventListener("input", customIpt);

function customIpt() {
  percent = customTip.value * 0.01;
  calcNums();
}

//Refresh view when people or bill change
people.addEventListener("keyup", calcNums);
totalBill.addEventListener("keyup", calcNums);

// Reset
resetParams.addEventListener("click", reset);

function reset() {
  totalBill.value = "";
  customTip.value = "";
  people.value = "";
  tipPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
}
