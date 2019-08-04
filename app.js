document.querySelector('#answer').addEventListener('click',resultTheNumbers)

document.querySelector('#clear').addEventListener('click',clearForm)

function resultTheNumbers(e){
	e.preventDefault(); // Preventing default form submit
				const action = document.querySelector('#operator').value; // storing operation value
				const fnum = document.querySelector('#firstNumber').value; // Storing first number value
				const snum = document.querySelector('#secondNumber').value; // Storing second number value
				let answer; // initialising answer variable

				// Checking input fields entry
				if (fnum === '' || snum === '') {
					alert('First number and Second Number required!');
				}
				else {

		switch (action) {
			case '+': // When user wants to add
				answer = Number(fnum) + Number(snum);
				break;
			case '-': // When user wants to subtract
				answer = Number(fnum) - Number(snum);
				break;
			case '/': // When user wants to divide
				answer = Number(fnum) / Number(snum);
				break;
			case '*': // When user wants to multiply
				answer = Number(fnum) * Number(snum);
				break;
			default:
				answer = 'None'; // If user selects no operand
			}

			if (answer === 'None') { // text to display if user selects no operand
				document.querySelector('#Ans').innerText = 'Please Select an Operator';
			}
			else { // answer to display
				document.querySelector('#Ans').innerText = 'The answer is :' + answer;
			}
		}
}

function clearForm() // Clearing the form
{
	document.querySelector('#firstNumber').value = '';
	document.querySelector('#secondNumber').value = '';
	document.querySelector('#operator').value = '';
	document.querySelector('#Ans').innerText ='';
}
