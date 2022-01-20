const text = "4102080860435620"
function luhnAlgorithm(text){
  const inputArray = text.split("")
  numberArray = inputArray.map(function(str){
    return parseInt(str);
  });
  let reversedArray = numberArray.reverse();
  let doubledArray = [];
  for (let i = 0; i < reversedArray.length; i += 2){
    reversedArray[i] = reversedArray[i]*2
  }
  reversedArray.forEach(function(str){
    str = str + "";
    if (str > 9){
      const doubleStringArray = str.split("");
      doubleDigitArray = doubleStringArray.map(function(str){
        return parseInt(str);
      })
      reversedArray = doubleDigitArray;
    }
  });
  return reversedArray;
}

let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
  return previousValue + currentValue
}, 0)
// sum is 6

function splitToDigit(n){
  return (n + '').split('').map((i) => { return Number(i); })
}

console.log(splitToDigit(100))