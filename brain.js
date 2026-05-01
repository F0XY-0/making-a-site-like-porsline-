function login(event) {
    
    if (event) event.preventDefault();
    
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let msg = document.getElementById('message');

    if (username === "admin" && password === "1234") {
        msg.innerHTML = "✅ login successful!";
        msg.style.color = "green";
        setTimeout(() => {
            window.location.href = "skelyoff.html";
        }, 2000);
    } else {
        msg.innerHTML = "❌ incorrect password or username";
        msg.style.color = "red";
    }
}
