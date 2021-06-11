// connects the button to the two input boxes.
document.getElementById('multiply').addEventListener('click', calculate)
let firstNum = 0
let secondNum = 0
let counter = 0
let answer = 0

function calculate () {
  firstNum = document.getElementById('first').value
  firstNum = parseInt(firstNum)
  secondNum = document.getElementById('second').value
  secondNum = parseInt(secondNum)

  // Makes it so the counter keeps looping until we get the correct product.
  for (counter = 0; counter < firstNum; counter++) {
    answer = answer + secondNum
  }
  document.getElementById('answer').innerHTML = answer
}
