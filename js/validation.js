function tenDigits() {
	var phone = $("#phone").val();
	if (phone.length < 10){
		document.getElementById("phone").style.backgroundColor = "red";
	} else {
		document.getElementById("phone").style.backgroundColor = "green";
		var finalPhone = "(" + phone[0] + phone[1] + phone[2] + ") " + phone[3] + phone[4] + phone[5] + "-" + phone[6] + phone[7] + phone[8] + phone[9];
		console.log(finalPhone);
		}
};

function validateForm() {
	var name = $("#name").val();
	var address = $("#address").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	if (name.length === 0) {
		document.getElementById("name").style.backgroundColor = "red";
	} else if (address.length === 0) {
		document.getElementById("address").style.backgroundColor = "red";
	} else if (phone.length !== 10) {
		document.getElementById("phone").style.backgroundColor = "red";
	} else if (email.indexOf('@') < 1) {
		document.getElementById("email").style.backgroundColor = "red";
	} else {
		alert("Thank you for submitting your information.");
		console.log('Name = ' + name + '\n' + 'Address = ' + address + '\n' + 'E-mail = ' + email);
	}
};

var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("keyup", tenDigits);
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", validateForm);