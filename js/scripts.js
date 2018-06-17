const form = document.querySelector('form');
const input = document.querySelector('input');

function convertToRoman(x) {
 const decimalValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
 const romanNumerals = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
 let romanNum = [];
 for (let i = 0; i < decimalValues.length; i++) {
 	 let v = decimalValues.filter(num => {
       return num <= x;
   });
   v = v.pop();
   let n = decimalValues.indexOf(v);
   n = romanNumerals[n];
   romanNum.push(n);
   x -= v;
 }
 return romanNum.join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let userNum = parseInt(input.value);
  let romanNum = convertToRoman(userNum);
  console.log(romanNum);
  input.value = romanNum;
});