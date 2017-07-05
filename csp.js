/*FileName: csp.js
Last updated: 11/24/2013*/

/* Takes input from the calculator buttons, one at a time */
var inputString = "";

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

/* Calculator page function */

/* Updates the calculator's display when a button on the calculator is clicked.
The operation's inputs are kept track of using the inputString variable */
function updateString(value)
{
   inputString += value;
   document.forms[0].display.value = inputString;
}

/* ******************************* */
/* End of Calculator function, start of Prime Numbers page functions */
/* ******************************* */

/* Validates all input on the Prime Numbers form and checks to make sure that
no erroneous inputs have been made before proceeding to display the primes in
the selected range. */
function validateInput()
{
	var firstNum = document.forms[0].firstNumber.value;
	var lastNum = document.forms[0].lastNumber.value;
	
	if(document.forms[0].firstNumber.value < 0)
	{
		alert("Input must be positive");
		return false;
	}
	else if(document.forms[0].lastNumber.value < 0)
	{
		alert("Input must be positive");
		return false;
	}
	else if(document.forms[0].firstNumber.value == '' || document.forms[0].lastNumber.value == '')
	{
		alert("You must first enter a number in both fields; please try again");
		return false;
	}
	else if(isNaN(firstNum))
	{
		alert("Please type numeric values only");
		return false;
	}
	else if(isNaN(lastNum))
	{
		alert("Please type numeric values only");
		return false;
	}
	else if(parseInt(firstNum) > parseInt(lastNum))
	{
		alert("First number should be less than the second number");
		return false;
	}
	else
	{
		displayPrimeNumbers(firstNum, lastNum);
	}
}

/* Displays the table of prime numbers entered by the user, inclusive of
the first, last or both numbers if they are prime as well. */
function displayPrimeNumbers(first, last)
{
	/* First add a link to the external CSS file to apply formatting to table */
	document.write("<link rel='stylesheet' href='csp.css' type='text/css' media='screen' />");
	
	/* Convert both entries to integers for comparison*/
	var start = parseInt(first);
	var end = parseInt(last);
	var cellCount = 0; /* A cell counter to keep rack of the number of cells in each row */
	var maxRowCellCount = 10; /* The maximum number of cells in each row of the table */
	var primeCheck; /* A variable to check whether the current number is a prime number */
	
	/* Starts off the table with the first row */
	document.write("<table>")
	document.write("<tr>")
	
	/* Start looping from the first entry of the user */
	for(var i = start; i <= end; i++)
	{
		primeCheck = 0; /* Re-set the number of primes found to 0 */
		var sqrt = Math.sqrt(i); /* Take the square root of the current number */
		var maxDiv = parseInt(sqrt); /* Truncate it to an int (take off the decimal part) */
		
		/* Now divide the current number from 2 through maxDiv */
		for(var j = 2; j <= maxDiv; j++)
		{
			if(i % j == 0) /* If at anytime the remainder is 0, the number is not a prime; */
			{
				primeCheck++; /* Update primeCheck */
			}
		}
		
		/* If primeCheck remains 0, the number is a  prime; write it to the table */
		if(primeCheck == 0)
		{
			document.write("<td>" + i + "</td>");
			cellCount++;
		}
		
		/* Check the remaining number or cells in the row and start a new row of cells
		if necessary */
		if(cellCount == maxRowCellCount)
		{
			document.write("</tr><tr>")
			cellCount = 0;
		}
		
	} /*End of outer for loop*/
	
	/* End the last row and the table */
	document.write("</tr>")
	document.write("</table>")
	
	document.write("<p>")
		document.write("<a href='PrimeNumbers.html'>Back to the previous page</a> &nbsp");
	document.write("</p>")
	
	document.close(); /* Closes the document, stops loading the page */
} /* End of displayPrimeNumbers(...) function */

/* ******************************* */
/* End of Prime Numbers page functions, start of Ads page functions */
/* ******************************* */

var adCount; /*A variable that keeps track of the ad number being displayed (cvb1.gif/cvb2.giv/cvb3.gif)*/
var decrement; /* A variable that decrements from 10 to 0*/
var change; /* Takes the return value of a setInterval(...) function call */
var countDown; /* Takes the return value of a setInterval(...) function call */

/* Calls the startCountDown() and changeAd() functions to display ads and re-direct the browser*/
function startAdPage()
{	
	decrement = document.forms[0].count.value;
	adCount = 1;
	
	change = window.setInterval("changeAd()", 2000);
	
	countDown = window.setInterval("startCountdown()", 1000);
}

/*Creates an animated advertisment with three .gif images and the use of a counter.*/
function changeAd()
{	
	if(adCount == 3)
	{
		adCount = 1;
	}
	else
	{
		adCount++;
	}
	
	document.images[0].src = "images/cvb" + adCount + ".gif";
}

/*Uses a decrementer, which counts down to 0. Once its value reaches 0, the function clears both intervals*/
function startCountdown()
{
	decrement--;
	
	document.forms[0].count.value = decrement;
	
	if(decrement == 0)
	{
		clearInterval(change);
		clearInterval(countDown);
		
		location.assign("CVR2.html");
	}
}

/* *******************************
/* End of Ads page functions, start of Forms page functions
/* NOTE: The Objects page also uses the validateForm() function 
/* to validate the form.
/* ******************************* */

var blnValid; /* A variable that acts a "flag" */

/*Validates all fields on the Forms page before the user submits the form*/
function validateForm()
{
	blnValid = true;

	var quantity = document.forms[0].copies.value; /*Gets the number of copies the user entered*/
	
	/*Validation of all form elements is being done in
	reverse-flow to ensure that the focus is set to the top-most element with an error.*/
	
	/*Validate the quantity text box.*/
	if(document.forms[0].copies.value < 1 || document.forms[0].copies.value > 25)
	{
		document.getElementById('errorCopies').style.visibility = "visible";
		document.forms[0].copies.focus();
		blnValid = false;
	}
	else if(document.forms[0].copies.value == "")
	{
		document.getElementById("errorCopies").style.visibility = "visible";
		document.forms[0].copies.focus();
		blnValid = false;
	}
	else if(isNaN(quantity))
	{
		document.getElementById("errorCopies").style.visibility = "visible";
		document.forms[0].copies.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("errorCopies").style.visibility = "hidden";
	}
	
	/*Validate the size selection radio buttons*/
	if(document.forms[0].choice[0].checked == true)
	{
		document.getElementById("errorChoice").style.visibility = "hidden";
	}
	else if(document.forms[0].choice[1].checked == true)
	{
		document.getElementById("errorChoice").style.visibility = "hidden";
	}
	else if(document.forms[0].choice[2].checked == true)
	{
		document.getElementById("errorChoice").style.visibility = "hidden";
	}
	else if(document.forms[0].choice[3].checked == true)
	{
		document.getElementById("errorChoice").style.visibility = "hidden";
	}
	else if(document.forms[0].choice[4].checked == true)
	{
		document.getElementById("errorChoice").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("errorChoice").style.visibility = "visible";
		document.forms[0].elements["choice"][0].focus();
		blnValid = false;
	}
	
	/*Validate the photo selection radio buttons*/
	if(document.forms[0].select[0].checked == true)
	{
		document.getElementById("errorSelection").style.visibility = "hidden";
	}
	else if(document.forms[0].select[1].checked == true)
	{
		document.getElementById("errorSelection").style.visibility = "hidden";
	}
	else
	{
		document.getElementById("errorSelection").style.visibility = "visible";
		document.forms[0].elements["select"][0].focus();
		blnValid = false;
	}
	
	/*Validate the e-mail text box*/
	if(document.forms[0].email.value == "")
	{
		document.getElementById("errorEmail").style.visibility = "visible";
		document.forms[0].email.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("errorEmail").style.visibility = "hidden";
	}
	
	/*Validate the name text box*/
	if(document.forms[0].name.value == "")
	{
		document.getElementById("errorName").style.visibility = "visible";
		document.forms[0].name.focus();
		blnValid = false;
	}
	else
	{
		document.getElementById("errorName").style.visibility = "hidden";
	}
	
	/*At the end, check the flag; if it's false, do not proceed to form submission until
	all errors have been corrected; otherwise, submit the form*/
	if(blnValid == false)
	{
		return false;
	}
	else
	{
		getValues();
		displayOutput();
	}
}

/* ******************************* */
/* End of Forms page functions, start of Objects page functions
/* NOTE: The function validateForm() (see above) is also used to
/* validate the form on the Objects page
/* ******************************* */

var portraits = new PortraitOrder();

/*Returns the current date in the format 1-January-2013*/
function getLastModified()
{
	var lastMod = new Date(document.lastModified);
	var months = new Array("January", "February", "March", "April", "May", "June", "July", "August",
							"September", "October", "November", "December");
	
	document.write("Last Modified: " + lastMod.getDate() + "-" + months[lastMod.getMonth()] + "-" + lastMod.getFullYear());
}

/*Creates a new class that retrieves user data from the Objects page form*/
function PortraitOrder(photo, number, photoSize, name)
{
	this.portrait = photo;
	this.copies = number;
	this.size = photoSize;
	this.buyer = name;
}

/*Calculates the cost of the user's order based on the size of the portrait and number of copies
ordered*/
function calculateCost()
{
	if(portraits.size == "4-Wallets ($10)" || portraits.size == "2-4x6 ($10)" || portraits.size == "5x7 ($10)")
	{
		cost = 10 * portraits.copies;
		document.write("Total: $" + cost.toFixed(2));
	}
	else if(portraits.size == "8x10 ($20)")
	{
		cost = 20 * portraits.copies;
		document.write("Total: $" + cost.toFixed(2));
	}
	else
	{
		cost = 30 * portraits.copies;
		document.write("Total: $" + cost.toFixed(2));
	}
}

/*Gets the values entered by the user in the form on the Objects page*/
function getValues()
{
	var radSelect = document.getElementsByName("select");
	var radChoice = document.getElementsByName("choice");

	/* Get the name of the buyer */
	portraits.buyer = document.forms[0].name.value;
	
	/* Get the value of the selected radio button for photo choice */
	for(var i = 0; i < radSelect.length; i++)
	{
		if(radSelect[i].checked == true)
		{
			portraits.portrait = radSelect[i].value;
			break;
		}
	}
	
	/* Get the value of the selected radio button for photo size */
	for(var i = 0; i < radChoice.length; i++)
	{
		if(radChoice[i].checked == true)
		{
			portraits.size = radChoice[i].value;
			break;
		}
	}
	
	/*Get the number of copies ordered*/
	portraits.copies = document.forms[0].copies.value;
	
	/*Get the value from the email field and assign it to a new email property
	of the PortraitOrder class instance*/
	PortraitOrder.prototype.email = document.forms[0].email.value;
}

/*Displays the form order summary along with the header and footer of the site's webpages*/
function displayOutput()
{	
	/* First add a link to the external CSS file to apply formatting to table */
	document.write("<link rel='stylesheet' href='csp.css' type='text/css' media='screen' />");
	
	document.write("<div id='container'>");
		document.write("<div id='header'>");
			displayHeader();
		document.write("</div>");
		
		document.write("<div id='content'>");
			document.write("<p id='objectOutput'>")
				document.write("<h3>Thank you for your order!</h3>");
				document.write("<img src=" + portraits.portrait + " width='458' height='343' /><br /><br />");
				document.write("Buyer: " + portraits.buyer + "<br />");
				document.write("Portrait Size: " + portraits.size + "<br />");
				document.write("E-mail: " + portraits.email + "<br />");
				document.write("Copies: " + portraits.copies + "<br />");
				calculateCost();
				document.write("<br />");
			document.write("</p>");
		document.write("</p>");
		
		document.write("<div id='footer'>");
			displayFooter();
		document.write("</div>");
		
	document.write("</div>");
	
	document.close();
}

/* ******************************* */
/* End of Objects page functions, start of Shop page functions
/* ******************************* */

/* Caches the cookie images on file and loads them into the table */
function loadImage()
{
	document.write("<img src='' width='100' height='50' />");
	var image = new Image();
	
	for(var i = 0; i < 5; i++)
	{
		image.src = "images/cookies" + (i+1) + ".jpg";
		document.images[i].src = image.src;
	}
}

var cartIsEmpty = true; /* A flag that determines whether or not the shopping cart is empty */
var subTotal = 0; // The subtotal, tax, shpping and grand total amounts
var tax = 0;
var shipping = 0;
var grandTotal = 0;
var curRow = 1; // Keeps track of the current row in the shopping cart table

// thankyouRow and thankyouCell are place holders for the "Thank you for shopping ..." message
var thankyouRow;
var thankyouCell;

// statusRow and statusCell are place holders for the "You are a... shopper" message
var statusRow;
var statusCell;
var count = 0; // count through count4 are variables that prevent multiple instances of the same message
var count2 = 0; // being displayed more than once
var count3 = 0;
var count4 = 0;

/* Adds the selected item from the Products table to the Shopping Cart table */
function addItem(selectedItem)
{	
	if(cartIsEmpty == true)
	{
		document.getElementById("shoppingCart").deleteRow(0);
		cartIsEmpty = false;
	}
	
	var curItem = document.getElementById("productsTable").rows[selectedItem].cells;
	var image = curItem[0].innerHTML;
	var item = curItem[1].innerHTML;
	var price = curItem[2].innerHTML;
	
	var lastItem = document.getElementById("shoppingCart").rows.length;
	var cartTable = document.getElementById("shoppingCart");
	var newRow = cartTable.insertRow(lastItem);
	document.getElementById("shoppingCart").rows[lastItem].id = "R" + curRow;
	var imageCell = newRow.insertCell(0);
	imageCell.innerHTML = image;
	var itemCell = newRow.insertCell(1);
	itemCell.innerHTML = item;
	var priceCell = newRow.insertCell(2);
	priceCell.innerHTML = price;
	var actionCell = newRow.insertCell(3);
	actionCell.innerHTML = "<input type='button' value='Remove' " + "onclick=\"removeItem('R" + curRow + "')\" />"
	curRow++;
	
	// Keep a running tally of the amounts and add to the grand total
	subTotal += parseFloat(price.substring(1));
	tax = 0.05 * subTotal;
	shipping = 5;
	grandTotal = subTotal + tax + shipping;
	
	// Display all the amounts
	document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
	document.getElementById("tax").value = "$" + tax.toFixed(2);
	document.getElementById("shipping").value = "$" + shipping.toFixed(2);
	document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
	
	// Display a message or messages based on the grandTotal
	if(grandTotal < 21 && count == 0)
	{
		thankyouRow = document.getElementById("thankyou");
		thankyouCell = thankyouRow.insertCell(0);
		thankyouCell.style.textAlign = "left";
		thankyouCell.style.fontSize = "20px";
		thankyouCell.innerHTML = "Thank you for shopping at the Crazy Cookie Company!";
		count++;
	}
	
	if(grandTotal >= 21 && grandTotal < 31 && count2 < 1)
	{
		statusRow = document.getElementById("status");
		statusCell = statusRow.insertCell(0);
		statusCell.style.color = "blue";
		statusCell.style.textAlign = "left";
		statusCell.style.fontSize = "22px";
		statusCell.innerHTML = "You are a valued shopper";
		count2++;
	}
	
	if(grandTotal >= 31 && grandTotal < 41 && count3 < 1)
	{
		statusRow = document.getElementById("status");
		if(count2 < 1)
		{
			statusCell = statusRow.insertCell(0);
		}
		statusCell.style.color = "green";
		statusCell.style.textAlign = "left";
		statusCell.style.fontSize = "22px";
		statusCell.innerHTML = "You are a super shopper";
		count3++;
	}
	
	if(grandTotal >= 41 && count4 < 1)
	{
		statusRow = document.getElementById("status");
		statusCell.style.color = "red";
		statusCell.style.textAlign = "left";
		statusCell.style.fontSize = "22px";
		statusCell.innerHTML = "You are an elite shopper";
		count4++;
	}
	
} // End of addItem(...) function

/* Removes the selected item from the shopping cart table */
function removeItem(rowNum)
{
	// If there's only one row left in the shoppingCart table, delete it and replace it with
	// "Your shopping cart is empty"
	if(document.getElementById("shoppingCart").rows.length == 1)
	{
		document.getElementById("shoppingCart").rows[0].cells[0].innerHTML = "<td>Your shopping cart is empty</td>";
		var selectedRow = document.getElementById("shoppingCart").rows[0];
		selectedRow.deleteCell(1);
		selectedRow.deleteCell(1);
		selectedRow.deleteCell(1);
		
		// Re-set all the output values
		subTotal = 0;
		tax = 0;
		shipping = 0;
		grandTotal = 0;
		
		// Show them in the output text boxes
		document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
		document.getElementById("tax").value = "$" + tax.toFixed(2);
		document.getElementById("shipping").value = "$" + shipping.toFixed(2);
		document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
		
		// If the count variable is 1, decrement it and delete the thankyouRow cell
		if(count == 1)
		{
			count--;
			
			thankyouRow = document.getElementById("thankyou");
			thankyouRow.deleteCell(0);
		}
		
		cartIsEmpty = true;
	}
	else // Otherwise, more than one row exists
	{
		// Get that row, get its price value
		var selectedRow = document.getElementById(rowNum).rowIndex;
		var removePrice = document.getElementById("shoppingCart").rows[selectedRow].cells[2].innerHTML;
		
		// Use the row's price value to adjust the output values and the grandTotal
		subTotal = subTotal - parseFloat(removePrice.substring(1));
		tax = 0.05 * subTotal;
		grandTotal = subTotal + tax + shipping;
		
		document.getElementById("shoppingCart").deleteRow(selectedRow); // then delete that row
		
		// Adjust the output values in the text boxes; shipping remains the same
		document.getElementById("subTotal").value = "$" + subTotal.toFixed(2);
		document.getElementById("tax").value = "$" + tax.toFixed(2);
		document.getElementById("grandTotal").value = "$" + grandTotal.toFixed(2);
		
		// Based on what the user removed (and the resulting grandTotal), adjust the message/s displayed
		if(grandTotal < 21)
		{
			if(count2 == 1)
			{
				count2--;
			
				statusRow = document.getElementById("status");
				statusRow.deleteCell(0);
			}
			
			if(count2 < 1)
			{				
				statusRow = document.getElementById("status");
				statusRow.deleteCell(0);
			}
		}
		
		if(grandTotal >= 21 && grandTotal < 31 && count3 == 1)
		{
			count3--;
			
			statusRow = document.getElementById("status");
			statusCell.style.color = "blue";
			statusCell.style.textAlign = "left";
			statusCell.style.fontSize = "22px";
			statusCell.innerHTML = "You are a valued shopper";
		}
		
		if(grandTotal >= 31 && grandTotal < 41 && count4 == 1)
		{
			count4--;
			
			statusRow = document.getElementById("status");
			statusCell.style.color = "green";
			statusCell.style.textAlign = "left";
			statusCell.style.fontSize = "22px";
			statusCell.innerHTML = "You are a super shopper";
		}
	} // End of if-else
} // End of removeItem(...) function

/* ******************************* */
/* End of Shop page functions, start of Promo page functions
/* NOTE: This page also uses the Shop page functions
/* ******************************* */

/* Loads (prepares) all event handlers on the Promo page after it loads */
function prepareHandlers()
{
	// Get all the buttons from the productsTable
	var addOne = document.getElementById("one");
	var addTwo = document.getElementById("two");
	var addThree = document.getElementById("three");
	var addFour = document.getElementById("four");
	var addFive = document.getElementById("five");
	
	// Using anonymous functions, use the onclick event handler for each button
	addOne.onclick = function()
	{
		addItem(document.getElementById("cookie1").rowIndex);
	}
	
	addTwo.onclick = function()
	{
		addItem(document.getElementById("cookie2").rowIndex);
	}
	
	addThree.onclick = function()
	{
		addItem(document.getElementById("cookie3").rowIndex);
	}
	
	addFour.onclick = function()
	{
		addItem(document.getElementById("cookie4").rowIndex);
	}
	
	addFive.onclick = function()
	{
		addItem(document.getElementById("cookie5").rowIndex);
	}
	
} // End of prepareHandlers() function

/* Loads the modal window, then prepares event handlers */
window.onload = function()
{	
	loadModal(); // First, load the modal window
	
	prepareHandlers(); // Then prepare the event handlers; the order is important to ensure the buttons work
}

/* Loads the modal window with the specified width, using innerWidth or clientwidth depending on the browser;
also loads the "mask" */
function loadModal()
{
	var width;
	
	if(window.innerWidth) // For Chrome, Firefox, Safari, IE 9 (and above) and Opera
	{
		width = window.innerWidth;
	}
	else // For IE 8 and below
	{
		width = document.body.clientWidth || document.documentElement.clientWidth;
	}
	
	var leftEdge = (width / 2) - 412;
	
	document.getElementById("modal").style.left = leftEdge + "px";
	
	document.getElementById("mask").style.visibility = "visible";
	document.getElementById("mask").onclick = closeModal;
}

/* Closes the modal window */
function closeModal()
{
	document.getElementById("mask").style.visibility = "hidden";
}

/* ******************************* */
/* End of Promo page functions, start of AJAX page functions
/* ******************************* */

var weatherRequest = false;
var timeRequest = false;

/* Returns the requested ActiveX object if successful */
function getRequestObject()
{	
	try
	{
		httpRequest = new XMLHttpRequest();
	}
	catch (requestError)
	{
		try
		{
			httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}
		catch (requestError)
		{
			try
			{
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch (requestError)
			{
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	return httpRequest;
} // End of getRequestObject() function

/* Instantiates, opens and sends the HTTP request for Yahoo! weather */
function weatherUpdate()
{
	if(!weatherRequest)
	{
		weatherRequest = getRequestObject();
	}
	
	var zip = document.forms[0].zip.value;
	weatherRequest.abort();
	weatherRequest.open("get", "WeatherReport.php?zip=" + zip, true)
	weatherRequest.send(null);
	weatherRequest.onreadystatechange = fillWeatherInfo;
}

/* Returns the Yahoo! weather feed and displays it */
function fillWeatherInfo()
{
	if(weatherRequest.readyState == 4 && weatherRequest.status == 200)
	{
		var weather = weatherRequest.responseXML;
		var weatherItems = weather.getElementsByTagName("item");
		
		if(weatherItems.length > 0)
		{
			for(var i = 0; i < weatherItems.length; i++)
			{
				var curHeadline = weatherItems[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
				var curLink = weatherItems[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
				var curPubDate = weatherItems[i].getElementsByTagName("pubDate")[0].childNodes[0].nodeValue;
				var curDesc = weatherItems[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
				
				var weatherSpot = document.getElementById("weatherPara");
				var curWeather = "<a href='" + curLink + "'>" + curHeadline + "</a><br />";
				curWeather += "<span id='curDate'>" + curPubDate + "</span><br />";
				curWeather += curDesc + "<br />";
				weatherSpot.innerHTML = curWeather;
			}
		}
		else
		{
			alert("Invalid ZIP code");
		} // End of nested if-else
	} // End of if statement
} // End of fillWeatherInfo() function

/* Gets the current time from the server */
function timeUpdate()
{
	if(!timeRequest)
	{
		timeRequest = getRequestObject();
	}
	
	timeRequest.abort();
	timeRequest.open("get", "DateTime.php", true);
	timeRequest.send();
	timeRequest.onreadystatechange = getCurrTime;
}

/* Returns the current time sent back from the server request and displays it */
function getCurrTime()
{
	if(timeRequest.readyState == 4 && timeRequest.status == 200)
	{
		document.getElementById("currentTime").innerHTML = timeRequest.responseText;
	}
}

/* Uses the setInterval method to update the date and time every five seconds */
function refreshTime()
{
	var update = setInterval("timeUpdate()", 5000);
}















