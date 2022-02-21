// Selectors
const totalBill = document.querySelector(".bill-total");
const tipPercent = document.querySelectorAll(".tip-percent");
const customTip = document.querySelector(".custom-tip");
const people = document.querySelector(".divide");
const tipPerPerson = document.querySelector(".tip-pp");
const totalPerPerson = document.querySelector(".total-pp");

//Main function for the calculations
function calcNums() {
  let percent = this.value * 0.01;
  let tip = (totalBill.value * percent).toFixed(2);
  let tipAmount = tip / people.value;
  let total = tipAmount + totalBill.value / people.value;
  tipPerPerson.innerHTML = `$${tipAmount.toFixed(2)}`;
  totalPerPerson.innerHTML = `$${total.toFixed(2)}`;
//   console.log(percent, tip, tipAmount, total);
}

//Tip buttons
/* tipPercent.forEach((el, i) => el.addEventListener("click", function() {
})); */

//Custom Tip
customTip.addEventListener("keyup", calcNums);

//Refresh view when people change
people.addEventListener("keyup", calcNums);


// Reset
document.querySelector(".reset").addEventListener("click", function () {
  totalBill.value = "";
  customTip.value = "";
  people.value = "";
  tipPerPerson.innerHTML = "$0.00";
  totalPerPerson.innerHTML = "$0.00";
});



// Loop through the buttons and add the active-btn class to the current/clicked button
for (let i = 0; i < tipPercent.length; i++) {
  tipPercent[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active-btn");

    // If there's no active-btn class
    if (current.length > 0) {
      current[0].className = current[0].className.replace("active-btn", "");
    }

    // Add the active-btn class to the current/clicked button
    this.className += " active-btn";
  });
}
