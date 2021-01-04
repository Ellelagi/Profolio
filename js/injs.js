let passSave = "admin";


let passCount = 1;
let passMax = 3;


function checkPass() {

	
	let passWord = document.forms["login"]["password"].value;
	

	
	if (passCount <= passMax) {

		
		if (passWord != passSave) {
			console.log(passCount);
			
			var attemptsLeft = 4 - passCount;

			
			document.getElementById("passStatus").innerHTML = "You have " + attemptsLeft + " attempts left!";

			
			passCount++;

			
			return false;
		} else {
			
			return true;
		}

	} else {
		
		document.getElementById("passStatus").innerHTML = "NO LOGIN FOR YOU!";
		
		document.getElementById("passStatus").style.color = "red";
		return false;

	}
}