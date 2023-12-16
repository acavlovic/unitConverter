let insertedValue;
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el");
const volumenEl = document.getElementById("volumen-el");
const massEl = document.getElementById("mass-el");

function render(value) {
  console.log(insertedValue);
  let listResult = "";
  const feet = insertedValue * 3.28084;
  const meters = insertedValue / 3.28084;
  const liters = insertedValue * 0.2464;
  const gallons = insertedValue / 0.2464;
  const kilograms = insertedValue * 2.204;
  const pounds = insertedValue / 2.204;

  if (value >= 0) {
    lengthEl.innerHTML = `<p>${value} meters = ${feet.toFixed(
      3
    )} feet | ${value} feet = ${meters.toFixed(3)} meters</p>`;
    volumenEl.innerHTML = `<p>${value} liters = ${gallons.toFixed(
      3
    )} gallons | ${value} gallons = ${liters.toFixed(3)} liters</p>`;
    massEl.innerHTML = `<p>${value} kilograms = ${pounds.toFixed(
      3
    )} pounds | ${value} pounds = ${kilograms.toFixed(3)} kilograms</p>`;
  }
}

convertBtn.addEventListener("click", function () {
  insertedValue = parseFloat(inputEl.value);
  inputEl.value = "";
  render(insertedValue);
});
