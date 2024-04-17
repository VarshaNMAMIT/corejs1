function login(username, password) {
    if (username === "admin" && password === "12375") {
        return "Login successful";
    } else {
        return "Invalid credentials"
    }
}

console.log(login("admin", "12375"))
console.log(login("admin", "password123"))

