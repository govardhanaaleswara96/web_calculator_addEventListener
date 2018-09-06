// html elements
var firstElement = document.querySelector('#first-cals');
var secondElement = document.querySelector('#second-cals');
var operator = document.querySelector('#operation-cals');
var equal = document.querySelector('#equal-cals');
var result = document.querySelector('#result-cals');
var  plusElement= document.querySelector('#add');
var minusElement = document.querySelector('#sub');
var divElement = document.querySelector('#div');
var mulElement = document.querySelector('#mul');

// event listener
plusElement.addEventListener('click',function () {
    var symbol = plusElement.textContent;
    console.log(symbol);
    operator.value = symbol;
});

minusElement.addEventListener('click',function () {
    var symbol = minusElement.textContent;
    operator.value = symbol;
});
divElement.addEventListener('click',function () {
    var symbol = divElement.textContent;
    operator.value = symbol;
});
mulElement.addEventListener('click',function () {
    var symbol = mulElement.textContent;
    operator.value = symbol;
});

// operator
equal.addEventListener('click',function () {
   var firstNumber = Number(firstElement.value);
   var secondNumber = Number(secondElement.value);
   var operatorElement = operator.value.trim();
   var resultElement = '';

      if(firstNumber !== '' && secondNumber !== ''){

        switch (operatorElement) {
          case '+':
            resultElement = firstNumber + secondNumber;
            break;
          case '-':
            resultElement = firstNumber - secondNumber;
            break;
          case '/':
            resultElement = firstNumber / secondNumber;
              break;
          case '*':
            resultElement = firstNumber *  secondNumber;
            break;
         default:
           resultElement ='Result';
           break;
         }
         result.value = resultElement;
}

});
