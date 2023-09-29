document.getElementById("checkbox").addEventListener("change", show_password)
var pass_shown = false
function show_password() {
    var passwordVar = document.getElementById("password")
    if (pass_shown === true) {
        passwordVar.removeAttribute("type")
        passwordVar.setAttribute("type", "password")
        pass_shown = false
    } else {
        passwordVar.removeAttribute("type")
        passwordVar.setAttribute("type", "text")
        pass_shown = true
    }
}

async function login() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if (username == "" || password == "") {
        alert("please fill in all fields")
        return
    }
    if (username.includes(";") || username.includes('"') || username.includes(":") || username.includes("'") || username.includes("`")) {
        alert("please do not use special charakters")
        return;
    }
    if (password.includes(";") || password.includes('"') || password.includes(":") || password.includes("'") || password.includes("`")) {
        alert("please do not use special charakters")
        return;
    }
    if (password == "admin" && username == "admin") {
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("password", password)
        window.location.assign("bestillinger.html")
        const res = await fetch("get/users",
            {
                method: "GET"
            })
        var users = await res.json()
        console.log(users)
    }
}


if (sessionStorage.getItem("username") && sessionStorage.getItem("password")) {
    window.location.assign("bestillinger.html")
} 