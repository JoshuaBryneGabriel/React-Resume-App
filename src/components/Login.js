// Function to handle login
function handleLogin(username, password) {
    // Check if username and password are valid
    if (username === "admin" && password === "password") {
        // Successful login
        console.log("Login successful");
        // Redirect to home page or perform any other action
    } else {
        // Invalid login
        console.log("Invalid username or password");
        // Display error message or perform any other action
    }
}

// Example usage
handleLogin("admin", "password");
