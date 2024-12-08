document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top <= window.innerHeight * 0.75;
    };

    const activateSections = () => {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add("active");
            }
        });
    };
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check and apply the previously saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        toggleButton.textContent = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
    }

    toggleButton.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            // Switch to light mode
            body.classList.remove("dark-mode");
            toggleButton.textContent = "Dark Mode";
            localStorage.setItem("theme", "light-mode");
        } else {
            // Switch to dark mode
            body.classList.add("dark-mode");
            toggleButton.textContent = "Light Mode";
            localStorage.setItem("theme", "dark-mode");
        }
    });
    
    window.addEventListener("scroll", activateSections);

    activateSections(); // Initial check on page load
});


