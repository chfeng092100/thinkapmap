function required(event) {
    event.preventDefault();

    var nameInput = document.getElementById("username").value
    var pnInput = document.getElementById("userphonenumber").value
    localStorage.setItem('username', nameInput)
    localStorage.setItem('userPhoneNumber', pnInput)
    return window.location.assign('/game.html')
}