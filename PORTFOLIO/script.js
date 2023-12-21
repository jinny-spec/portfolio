function validateForm() {
    var passwordInput = document.getElementById('password');
    var password = passwordInput.value;
    
    if (password.length < 8) {
        alert ('Password must be at least 8 characters long');
        return false; 
    }
    return true;
}
function logout() {
    window.location.href = "login.html";
}
function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {    var result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}
