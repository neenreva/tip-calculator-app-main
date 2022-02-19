// Selectors
const totalBill = document.querySelector(".bill-total");
const tipPercent = document.querySelectorAll(".tip-percent");
const customTip = document.querySelector(".custom-tip");
const people = document.querySelector(".divide");
const tipPerPerson = document.querySelector(".tip-pp");
const totalPerPerson = document.querySelector(".total-pp");

console.log(totalBill, people);

//Select Tip buttons

tipPercent.forEach((el) =>
  el.addEventListener("click", function () {
    let percent = this.getAttribute("data-num");
    let tip = (totalBill.value * percent).toFixed(2);
    let tipAmount = tip / people.value;
    let total = tipAmount + totalBill.value / people.value;
    tipPerPerson.innerHTML = `$${tipAmount}`;
    totalPerPerson.innerHTML = `$${total}`;
  })
);

//Custom Tip Calc
customTip.addEventListener("");

// Reset

document.querySelector(".reset").addEventListener("click", function () {
  totalBill.value = "";
  customTip.value = "";
  people.value = "";
  tipPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
});
