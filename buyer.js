/*FileName: buyer.js
Last updated: 10/25/2013
Author: Ameya Joshi*/

/* Displays the header content on each webpage */
function displayHeader()
{
	document.write("<h1>Client-Side Programming: Fall 2013</h1>");

	document.write("<ul>")
	document.write("<li><a href='index.html'>Home</a></li>");
	document.write("<li><a href='calculator.html'>Calculator</a></li>");
    document.write("<li><a href='PrimeNumbers.html'>Primes</a></li>");
	document.write("<li><a href='CVR1.html'>Ads</a></li>");
	document.write("<li><a href='Forms.html'>Forms</a></li>");
	document.write("<li><a href='Objects.html'>Objects</a></li>");
	document.write("<li><a href='buyer.html'>REGEX</a></li>");
	document.write("<li><a href='buyerCookies.html'>Cookies</a></li>");
	document.write("<li><a href='Shop.html'>Shop</a></li>");
	document.write("<li><a href='Promo.html'>Promo</a></li>");
	document.write("</ul>")
}

/* Displays the footer content on each webpage */
function displayFooter()
{
	document.write("<a href='index.html'>Home</a> &nbsp");
	document.write("<a href='calculator.html'>Calculator</a> &nbsp");
    document.write("<a href='PrimeNumbers.html'>Primes</a> &nbsp");
    document.write("<a href='CVR1.html'>Ads</a> &nbsp");
	document.write("<a href='Forms.html'>Forms</a>&nbsp");
    document.write("<a href='Objects.html'>Objects</a> &nbsp");
	document.write("<a href='buyer.html'>REGEX</a>&nbsp");
    document.write("<a href='buyerCookies.html'>Cookies</a> &nbsp");
	document.write("<a href='Shop.html'>Shop</a>&nbsp");
    document.write("<a href='Promo.html'>Promo</a> &nbsp");

	document.write("<p>")
		document.write("Contact Information:");
		document.write("<a href='mailto:ameya.s.joshi@my.occc.edu'>ameya.s.joshi@my.occc.edu</a>");
		document.write("<br />")
		document.write("Phone: (405)-555-1234");
    document.write("</p>")
		getLastModified();
	document.write("</script>")
	  
	document.write("<p>")
		document.write("Disclaimer: Oklahoma City Community College does not necessarily endorse the ");
		document.write("content or respective links of this page.");
	document.write("</p>")
}

/*Returns the current date in the format 1-January-2013*/
function getLastModified()
{
	var lastMod = new Date(document.lastModified);
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August",
							"September", "October", "November", "December");
	
	document.write("Last Modified: " + lastMod.getDate() + "-" + months[lastMod.getMonth()] + "-" + lastMod.getFullYear());
}

/* Validates all inputs from the REGEX form and validates them based on regular expressions*/
function validate()
{
	/* Booleans for checking valid inputs */
	var blnValid = true;
	var blnFilled = true;
	var cellFilled = true;
	var emailCheck = 0;
	
	/* Regex's for complete address and emails */
	var zipcode = /^\d{5}(-\d{4})?$/;
	var stateIndex = document.forms[0].State.selectedIndex;
	var city = /^[\w]+[\s\w]+/;
	var addressOne = /^[\w]+[\s\w]+/;
	var addressTwo = /^[\w]+[\s\w]+/;
	var confirmEmail = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,3})$/;
	var email = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,3})$/;
	
	/* Regex's for cell phone inputs */
	var cellAreaCode = /\d{3}/;
	var cellFirstThree = /\d{3}/;
	var cellLastFour = /\d{4}/;

	/* Regex's for phone inputs */
	var phoneAreaCode = /\d{3}/;
	var phoneFirstThree = /\d{3}/;
	var phoneLastFour = /\d{4}/;
	var lastName = /^[\w]/;
	var firstName = /^[\w]/;
	
	/* Checking is done from bottom to top so the focus goes to the top-most field with an error */
	
	/* Validates the zipcode */
	if (zipcode.test(document.forms[0].Zip.value) == false)
	{
		document.getElementById("E_Zip").style.visibility = "visible";
		document.forms[0].Zip.style.backgroundColor = "#FFF9CC";
		document.forms[0].Zip.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_Zip").style.visibility = "hidden";
		document.forms[0].Zip.style.backgroundColor = "#FFF";
	}
	
	/* Ensures a state is selected */
	if (stateIndex == 0)
	{
		document.getElementById("E_State").style.visibility = "visible";
		document.forms[0].State.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_State").style.visibility = "hidden";
	}
	
	/* Validates the city name */
	if (city.test(document.forms[0].City.value) == false)
	{
		document.getElementById("E_City").style.visibility = "visible";
		document.forms[0].City.style.backgroundColor = "#FFF9CC";
		document.forms[0].City.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_City").style.visibility = "hidden";
		document.forms[0].City.style.backgroundColor = "#FFF";
	}
	
	/* Validates the "Address 1" field */
	if (addressOne.test(document.forms[0].Address1.value) == false)
	{
		document.getElementById("E_Address1").style.visibility = "visible";
		document.forms[0].Address1.style.backgroundColor = "#FFF9CC";
		document.forms[0].Address1.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_Address1").style.visibility = "hidden";
		document.forms[0].Address1.style.backgroundColor = "#FFF";
	}
	
	/* Validates the "Address 2" field if there is an entry; otherwise skip validating this field */
	if (document.forms[0].Address2.value != "")
	{
		if (addressOne.test(document.forms[0].Address2.value) == false)
		{
			document.getElementById("E_Address2").style.visibility = "visible";
			document.forms[0].Address2.style.backgroundColor = "#FFF9CC";
			document.forms[0].Address2.focus();
			blnValid = false;
		}
		else
		{
			document.getElementById("E_Address2").style.visibility = "hidden";
			document.forms[0].Address2.style.backgroundColor = "#FFF";
		}
	}
	else
	{
		document.getElementById("E_Address2").style.visibility = "hidden";
		document.forms[0].Address2.style.backgroundColor = "#FFF";
	}
	
	/* Validate confirm e-mail */
	if (confirmEmail.test(document.forms[0].ConfirmEmail.value) == false)
	{
		document.getElementById("E_ConfirmEmail").style.visibility = "visible";
		document.forms[0].ConfirmEmail.style.backgroundColor = "#FFF9CC";
		document.forms[0].ConfirmEmail.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_ConfirmEmail").style.visibility = "hidden";
		document.forms[0].ConfirmEmail.style.backgroundColor = "#FFF";
		emailCheck++;
	}
	
	/* Validate e-mail */
	if (email.test(document.forms[0].Email.value) == false)
	{
		document.getElementById("E_Email").style.visibility = "visible";
		document.forms[0].Email.style.backgroundColor = "#FFF9CC";
		document.forms[0].Email.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_Email").style.visibility = "hidden";
		document.forms[0].Email.style.backgroundColor = "#FFF";
		emailCheck++;
	}
	
	/* Ensure that both, e-mail and confirm e-mail are the same */
	if(document.forms[0].Email.value != "" && document.forms[0].ConfirmEmail.value != "" && emailCheck == 2)
	{
		if (document.forms[0].Email.value != document.forms[0].ConfirmEmail.value)
		{
			document.getElementById("E_ConfirmEmail").style.visibility = "visible";
			document.forms[0].ConfirmEmail.style.backgroundColor = "#FFF9CC";
			
			document.getElementById("E_Email").style.visibility = "visible";
			document.forms[0].Email.style.backgroundColor = "#FFF9CC";
			document.forms[0].Email.focus();
			
			blnValid = false;
		}
		else
		{
			document.getElementById("E_ConfirmEmail").style.visibility = "hidden";
			document.forms[0].ConfirmEmail.style.backgroundColor = "#FFF";
			
			document.getElementById("E_Email").style.visibility = "hidden";
			document.forms[0].Email.style.backgroundColor = "#FFF";
		}
	}
	
	/* Validate the first phone number field */
	if(phoneLastFour.test(document.forms[0].PhoneC.value) == false)
	{
		document.getElementById("E_Phone").style.visibility = "visible";
		document.forms[0].PhoneC.style.backgroundColor = "#FFF9CC";
		document.forms[0].PhoneC.focus();
		blnValid = false;
		blnFilled = false;
	}
	/* Validate the second phone number field */
	if(phoneFirstThree.test(document.forms[0].PhoneB.value) == false)
	{
		document.getElementById("E_Phone").style.visibility = "visible";
		document.forms[0].PhoneB.style.backgroundColor = "#FFF9CC";
		document.forms[0].PhoneB.focus();
		blnValid = false;
		blnFilled = false;
	}
	/* Validate the third phone number field */
	if(phoneAreaCode.test(document.forms[0].PhoneA.value) == false)
	{
		document.getElementById("E_Phone").style.visibility = "visible";
		document.forms[0].PhoneA.style.backgroundColor = "#FFF9CC";
		document.forms[0].PhoneA.focus();
		blnValid = false;
		blnFilled = false;
	}
	/* If all phone fields check out good, proceed */
	if (blnFilled == true)
	{
		document.forms[0].PhoneA.style.backgroundColor = "#FFF";
		document.forms[0].PhoneB.style.backgroundColor = "#FFF";
		document.forms[0].PhoneC.style.backgroundColor = "#FFF";
		document.getElementById("E_Phone").style.visibility = "hidden";
	}
	
	/* Check the cell phone fields; if they're empty, do nothing */
	if(document.forms[0].Cell_PhoneA.value == "" && document.forms[0].Cell_PhoneB.value == "" && document.forms[0].Cell_PhoneC.value == "")
	{
		document.getElementById("E_Cell").style.visibility = "hidden";
		document.forms[0].Cell_PhoneA.style.backgroundColor = "#FFF";
		document.forms[0].Cell_PhoneB.style.backgroundColor = "#FFF";
		document.forms[0].Cell_PhoneB.style.backgroundColor = "#FFF";
	}
	else /* Check the cell phone fields */
	{
		if(cellLastFour.test(document.forms[0].Cell_PhoneC.value) == false)
		{
			document.getElementById("E_Cell").style.visibility = "visible";
			document.forms[0].Cell_PhoneC.style.backgroundColor = "#FFF9CC";
			document.forms[0].Cell_PhoneC.focus();
			blnValid = false;
			cellFilled = false;
		}
	
		if(cellFirstThree.test(document.forms[0].Cell_PhoneB.value) == false)
		{
			document.getElementById("E_Cell").style.visibility = "visible";
			document.forms[0].Cell_PhoneB.style.backgroundColor = "#FFF9CC";
			document.forms[0].Cell_PhoneB.focus();
			blnValid = false;
			cellFilled = false;
		}
		
		if(cellAreaCode.test(document.forms[0].Cell_PhoneA.value) == false)
		{
			document.getElementById("E_Cell").style.visibility = "visible";
			document.forms[0].Cell_PhoneA.style.backgroundColor = "#FFF9CC";
			document.forms[0].Cell_PhoneA.focus();
			blnValid = false;
			cellFilled = false;
		}
	}
	
	if (cellFilled == true)
	{
		document.getElementById("E_Cell").style.visibility = "hidden";
		document.forms[0].Cell_PhoneA.style.backgroundColor = "#FFF";
		document.forms[0].Cell_PhoneB.style.backgroundColor = "#FFF";
		document.forms[0].Cell_PhoneC.style.backgroundColor = "#FFF";
	}
	
	/* Validate the last name field */
	if(lastName.test(document.forms[0].LastName.value) == false)
	{
		document.getElementById("E_LastName").style.visibility = "visible";
		document.forms[0].LastName.style.backgroundColor = "#FFF9CC";
		document.forms[0].LastName.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_LastName").style.visibility = "hidden";
		document.forms[0].LastName.style.backgroundColor = "#FFF";
	}
	
	/* Validate the first name field */
	if(lastName.test(document.forms[0].FirstName.value) == false)
	{
		document.getElementById("E_FirstName").style.visibility = "visible";
		document.forms[0].FirstName.style.backgroundColor = "#FFF9CC";
		document.forms[0].FirstName.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("E_FirstName").style.visibility = "hidden";
		document.forms[0].FirstName.style.backgroundColor = "#FFF";
	}
	
	/* If the entire form checks out good, proceed to form processing, otherwise, tell the user
	some of the fields still need correcting */
	if(blnValid == false)
	{
		document.getElementById("E_Alert").style.visibility = "visible";
		return false;
	}
	else
	{
		document.getElementById("E_Alert").style.visibility = "hidden";
		var firstName = document.forms[0].FirstName.value;
		
		/* If the form validates, create the required cookies */
		createCookie("first", document.forms[0].FirstName.value, 7);
		createCookie("last", document.forms[0].LastName.value, 7);
		createCookie("email", document.forms[0].Email.value, 7);
		createCookie("phoneA", document.forms[0].PhoneA.value, 7);
		createCookie("phoneB", document.forms[0].PhoneB.value, 7);
		createCookie("phoneC", document.forms[0].PhoneC.value, 7);
	}
	
} /* End of validate() function */

/* Automatically moves the cursor to the next field in the phone fields */
function movePhoneCursor()
{
	if(document.forms[0].PhoneA.value.length >= 3)
	{
		document.forms[0].PhoneB.focus();
	}
	
	if(document.forms[0].PhoneB.value.length >= 3)
	{
		document.forms[0].PhoneC.focus();
	}
}

/* Automatically moves the cursor to the next field in the cell phone fields */
function moveCellCursor()
{
	if(document.forms[0].Cell_PhoneA.value.length >= 3)
	{
		document.forms[0].Cell_PhoneB.focus();
	}
	
	if(document.forms[0].Cell_PhoneB.value.length >= 3)
	{
		document.forms[0].Cell_PhoneC.focus();
	}
}

/* ******************************* */
/* End of Chapter 7 Form functions, start of Cookies Form (Chapter 10) functions */
/* NOTE: This form for Chapter 10 also uses the previous functions above for validation */
/* ******************************* */

/* Uses cookies to gather and store form data */
function createCookie(name, value, expireDate)
{
	var expirationDate = new Date();
	expirationDate.setDate(expirationDate.getDate() + expireDate);
	document.cookie = name + "=" + encodeURIComponent(value) + "; expires=" + expirationDate.toUTCString();
}

/* Searches the cookie string that gets passed in */
function getCookie(searchCookie)
{
	var searchString; /* The cookie to be searched */
	var cookie; /* Each cookie in the array (below) */
	
	if(document.cookie)
	{
		var cookieString = decodeURIComponent(document.cookie);
		
		var dataArray = cookieString.split("; "); /* Split the string into tokens at the "; "*/
		
		/* Loop through the array of cookies */
		for(var i = 0; i < dataArray.length; i++)
		{
			cookie = dataArray[i];
			searchString = cookie.substring(0, cookie.indexOf("="));
			
			if(searchString == searchCookie)
			{
				var gotCookie = cookie.substring(cookie.indexOf("=") + 1, cookie.length);
			}
		}
	}
	return gotCookie;
}

/* Displays the order information to the customer and thanks them for their business */
function displayInformation()
{
	var firstName = getCookie("first");
	var lastName = getCookie("last");
	var email = getCookie("email");
	var phoneA = getCookie("phoneA");
	var phoneB = getCookie("phoneB");
	var phoneC = getCookie("phoneC");
	
	document.write("Thank you " + firstName + " for shopping with us.<br />");
	document.write("An e-mail will be sent to the e-mail address you provided when your package ships.<br />");
	document.write("<br />");
	document.write("The contact information on record is as follows:<br />");
	document.write("<strong>Name: </strong>" + firstName + " " + lastName + "<br />");
	document.write("<strong>E-mail: </strong>" + email + "<br />");
	document.write("<strong>Phone number: </strong>" + phoneA + "-" + phoneB + "-" + phoneC);
}




















