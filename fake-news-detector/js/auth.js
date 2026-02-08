
function userRegister(){
    showToast("Registration successful! Now login.");
    setTimeout(()=>goPage('login'),1300);
    return false;
}
function userLogin(){
    showToast("Login successful!");
    setTimeout(()=>goPage('detector'),1000);
    return false;
}
