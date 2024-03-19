function login() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;

	// Here you can add your login logic, AJAX request, etc.
	console.log("Logging in with", username, password);
	alert("Logged in with " + username + " (password: " + password + ")");
}
