// Function to show and hide content sections
function showContent(section) {
    console.log("HELLO");
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(section).style.display = 'block';

    // Change the active class for the navbar links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add active class to the clicked link
    const clickedLink = document.querySelector(`nav a[onclick="showContent('${section}')"]`);
    clickedLink.classList.add('active');
}

// Initially show the "Home" section
showContent('home');
