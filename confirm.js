// 


function loadDataAndCalculatePrice() {
	totalPrice = 0;
	var name = document.getElementById("confirm_name")
	var age = document.getElementById("confirm_age")
	var email = document.getElementById("confirm_email")
	var phone = document.getElementById("confirm_phone")
	var occupation = document.getElementById("confirm_occupation")
	var courses = document.getElementById("confirm_courses")
	var payment = document.getElementById("confirm_payment")
	var total = document.getElementById("confirm_total")


	lastname = sessionStorage.getItem("lastname");
	name.textContent = sessionStorage.firstname + " " + lastname;
	email.textContent = sessionStorage.email;
	phone.textContent = sessionStorage.phone;
	age.textContent = sessionStorage.age;
	occupation.textContent = sessionStorage.occupation;

	var yourCourses = " "
	if (sessionStorage.logicmath == "true") {
		totalPrice += 449;
		yourCourses += "logicmath, ";
		count += 1;
	}
	if (sessionStorage.web == "true") {
		totalPrice += 749; 
		yourCourses += "web, ";
		count += 1;

	}
	if (sessionStorage.python == "true") {
		yourCourses += "python, ";
		totalPrice += 799;
		count += 1;


	}
	if (sessionStorage.ai == "true") {
		yourCourses += "ai, ";
		totalPrice += 499;
		count += 1;


	}
	if (sessionStorage.datascience == "true") {
		yourCourses += "datascience, ";
		totalPrice += 249;
		count += 1;


	}
	if (sessionStorage.game == "true") {
		yourCourses += "game, ";
		totalPrice += 149;
		count += 1;


	var discount = ""
	if (count >= 3)	 {
		totalPrice = totalPrice * 80/100;
		discount += " (Discount 20% cause you registered more than 3 courses)"
	}
	if (sessionStorage.occupation = "highschool") {
		totalPrice = totalPrice * 90/100;
		discount += " (Discount 10% cause you are a highschool student)"
	}
	if (sessionStorage.payment = "paypal") {
		totalPrice = totalPrice * 105/100;
		discount += " (Up to 5% cause you make a payment by paypal)"
	}

	}
	courses.textContent = yourCourses;

	payment.textContent = sessionStorage.payment;
	total.textContent = totalPrice + discount; 
}
function cancelButton() {
	window.location = "register.html";
}

function init() {
	loadDataAndCalculatePrice();
	var cancel = document.getElementById("cancel_button");
	cancel.onclick = cancelButton;
}

window.onload = init;					