// detta är som din Inlogg går till andra sidor
let currentAddress = window.location.href;
console.log(currentAddress);

let currentURL = new URL(window.location.href);


console.log(currentURL);


console.log(currentURL.search);

var searchParams = new URLSearchParams(currentURL.search);




let fname = searchParams.get("Name");

console.log(fname);


document.getElementById("formName").innerHTML = "" + fname;




// Här börjar Cookie. som sparar din Inlogg



function makeCookie() {

	document.cookie = "username=Marcus";

	console.log("make cookie");

}

function getCookie() {

	let cookie = document.cookie;

	console.log(cookie);

	console.log(cookie.split("=")[0]);

	document.getElementById("putThatCookieDown").innerHTML = cookie.split("=")[0];
}