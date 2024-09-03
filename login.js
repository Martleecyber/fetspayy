function delayedLogin() {
    const loginButton = document.getElementById('login-button');
    loginButton.disabled = true;
    loginButton.textContent = 'Logging in...';

    setTimeout(() => {
        login();
    }, 2000); // 2-second delay before proceeding
}

function login() {
    const username = document.getElementById('username').value;
    localStorage.setItem('username', username);
    window.location.href = 'wallet.html';
}
