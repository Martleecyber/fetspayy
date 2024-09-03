const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.getElementById('cta').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default action (like submitting a form)
    
    // Hide the button to show only the spinner
    this.style.display = 'none';
    
    // Show the loading spinner
    document.getElementById('loading-spinner').classList.remove('hidden');
    
    // Simulate a delay of 30 seconds before proceeding (this could be replaced with actual logic)
    setTimeout(function() {
        // Hide the spinner after 30 seconds (or after your logic completes)
        document.getElementById('loading-spinner').classList.add('hidden');
        
        // Optionally, you could proceed with login actions here
        // window.location.href = "your-login-url"; // For example, redirect to another page
    }, 30000);
});

