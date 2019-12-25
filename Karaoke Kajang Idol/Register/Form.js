function formValidation() 
{
// Make quick references to our fields.
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var nric = document.getElementById('nric');
var telephone = document.getElementById('telephone');
var email = document.getElementById('email');
var pass = document.getElementById('password');
var pass2 = document.getElementById('password2');

// Check each input in the order that it appears in the form.
if (inputAlphabet(fname, "* Please use alphabets only *")) 
{
	if (inputAlphabet(lname, "* Please use alphabets only *")) 
	{
		if (emailValidation(email, "* Please enter a valid email address *")) 
		{
			if (textAlphanumeric(pass, "* Please use numbers and letters *")) 
			{
				if (textAlphanumeric(pass2, "* Password does not matches *")) 
				{
					if (textNumeric(telephone, "* Please enter a valid phone number *")) 
					{
						if (textNumeric(nric, "* Please enter a valid IC number *")) 
						{
							return true;
						}	
					}	
				}
			}
		}
	}
	return false;
}


// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) 
{
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) 
	{
		return true;
	}
	
	else 
	{
		document.getElementById('p1').innerText = alertMsg;  //this segment displays the validation rule for fname
		//alert(alertMsg);
		inputtext.focus();
		return false;
	}
}

// Function that checks whether input text is an alphabetic character or not.
function inputAlphabet(inputtext, alertMsg) 
{
	var alphaExp = /^[a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) 
	{
		return true;
	}
	
	else 
	{
		document.getElementById('p2').innerText = alertMsg;  //this segment displays the validation rule for lname
		//alert(alertMsg);
		inputtext.focus();
		return false;
	}
}

// Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) 
{
	var numericExpression = /^[0-9]+$/;
	if (inputtext.value.match(numericExpression)) 
	{
		return true;
	} 

	else 
	{
		document.getElementById('p3').innerText = alertMsg;  //this segment displays the validation rule for NRIC
		//alert(alertMsg);
		inputtext.focus();
		return false;
	}
}

// Function that checks whether input text is numeric or not.
function textNumeric(inputtext, alertMsg) 
{
	var numericExpression = /^[0-9]+$/;
	if (inputtext.value.match(numericExpression)) 
	{
		return true;
	} 

	else 
	{
		document.getElementById('p4').innerText = alertMsg;  //this segment displays the validation rule for telephone
		//alert(alertMsg);
		inputtext.focus();
		return false;
	}
}

// Function that checks whether an user entered valid email address or not and displays alert message on wrong email address format.
function emailValidation(inputtext, alertMsg) 
{
	var emailExp = /^[w-.+]+@[a-zA-Z0-9.-]+.[a-zA-z0-9]{2,4}$/;
	if (inputtext.value.match(emailExp)) 
	{
		return true;
	} 
	
	else 
	{
		document.getElementById('p5').innerText = alertMsg;  //this segment displays the validation rule for email
		//alert(alertMsg);
		inputtext.focus();
		return false;
	}
}


// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) 
{
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) 
	{
		return true;
	} 

	else 
	{
		document.getElementById('p6').innerText = alertMsg;  //this segment displays the validation rule for password
		//alert(alertMsg);
		inputtext.focus();
		return false;
		return false;
	}
}

// Function that checks whether input text includes alphabetic and numeric characters.
function textAlphanumeric(inputtext, alertMsg) 
{
	var alphaExp = /^[0-9a-zA-Z]+$/;
	if (inputtext.value.match(alphaExp)) 
	{
		return true;
	} 

	else 
	{
		document.getElementById('p7').innerText = alertMsg;  //this segment displays the validation rule for password
		//alert(alertMsg);
		inputtext.focus();
		return false;
		return false;
	}
}
}