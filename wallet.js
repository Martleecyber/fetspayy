document.addEventListener('DOMContentLoaded', function() {
    // Dynamic greeting based on time of day
    const greetingElement = document.getElementById('greeting');
    const username = "John Doe";  // Fetch this from session storage or an API
    const currentTime = new Date().getHours();
    let greetingText;

    if (currentTime < 12) {
        greetingText = `Good Morning, ${username}`;
    } else if (currentTime < 18) {
        greetingText = `Good Afternoon, ${username}`;
    } else {
        greetingText = `Good Evening, ${username}`;
    }

    greetingElement.textContent = greetingText;

    // Wallet balance increment
    let balance = 500;
    const balanceElement = document.getElementById('wallet-balance');
    
        

    // Profile and Logout functions
    window.viewProfile = function() {
        alert('Profile feature coming soon!');
    }

    // window.logout = function() {
    //     alert('Logging out...');
    //     // Add logout functionality here
    // }
});
