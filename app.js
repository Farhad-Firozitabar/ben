// Function to show or hide the "scroll to top" button based on scroll position
function toggleScrollToTopButton() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (scrollToTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block"; // Show the button
        } else {
            scrollToTopBtn.style.display = "none"; // Hide the button
        }
    }
}

// Add an event listener to detect scroll events
window.addEventListener("scroll", toggleScrollToTopButton);

// Function to scroll to the top when the button is clicked
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll to top
    });
});

// Detect when the user has reached the end of the page
window.addEventListener("scroll", function () {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    // If the user is near the end of the page, show the button
    if (scrollHeight - scrollTop <= clientHeight + 100) {
        toggleScrollToTopButton();
    }
});

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        showScrollPopup();
    }, 1000);
});

// Function to show the scroll popup
function showScrollPopup() {
    const scrollPopup = document.getElementById("scrollPopup");

    if (scrollPopup) {
        scrollPopup.style.opacity = "1";
        scrollPopup.style.transform = "translateY(0)";
        scrollPopup.addEventListener("click", function () {
            // Smooth scroll to the section you want users to scroll to
            window.scrollTo({
                top: document.getElementById("projects").offsetTop,
                behavior: "smooth",
            });
        });

        // Add an event listener to hide the popup when the user scrolls down to the project section
        window.addEventListener("scroll", function () {
            const projectSection = document.getElementById("projects");
            if (
                projectSection &&
                window.scrollY >= projectSection.offsetTop - window.innerHeight / 2
            ) {
                // Hide the popup
                scrollPopup.style.display = "none";
            }
        });
    }
}

// Apply a smooth up and down animation to the scroll popup
setInterval(function () {
    const scrollPopup = document.getElementById("scrollPopup");
    if (scrollPopup) {
        scrollPopup.style.animation = "bounceUpDown 2s infinite";
    }
}, 2000);
