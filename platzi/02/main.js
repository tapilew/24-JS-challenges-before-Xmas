console.log(i);
var i = "this is undefined but raises an error if wasn't var";

function calculateTip(billAmount, tipPercentage) {
  return billAmount * tipPercentage * 0.01;
}

console.log(calculateTip(100, 10));
console.log(calculateTip(1524.33, 25));
