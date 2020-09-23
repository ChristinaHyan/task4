// task 1

let text = prompt('enter the text here'); 
let reverse = '';

  for (let i = text.length -1; i >= 0; i--) { 
    reverse += text[i]; 
  }

  alert(reverse); 

  // task 2 partial

  let num1 = parseInt(prompt('enter the 1st number'));
  let num2 = parseInt(prompt('enter the 1st number'));

  let min = num1 > num2 ? num2 : num1;
  let max = num1 > num2 ? num1 : num2;

  let x = 0;

