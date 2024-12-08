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
    const matrixEffect = document.getElementById("matrix-effect");
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()";
    const numberOfColumns = Math.floor(window.innerWidth / 20); // Adjust column width
    const numberOfRows = Math.floor(window.innerHeight / 20); // Adjust row height

    const generateMatrixEffect = () => {
        // Create multiple characters falling in columns
        for (let i = 0; i < numberOfColumns; i++) {
            // Random initial Y position for each column
            let yPosition = Math.floor(Math.random() * window.innerHeight);

            // Create a series of characters for each column
            setInterval(() => {
                // Generate a random character from the list
                const char = characters[Math.floor(Math.random() * characters.length)];
                const charElement = document.createElement("div");
                charElement.classList.add("matrix-char");
                matrixEffect.appendChild(charElement);

                // Set the position of the falling character
                charElement.style.left = `${i * 20}px`; // Spread out each column
                charElement.style.top = `${yPosition}px`;

                // Make the character fall by increasing its Y position
                charElement.innerText = char;

                // Increase the position for the next character
                yPosition += 20;

                // If it goes out of the screen, reset the position
                if (yPosition > window.innerHeight) {
                    yPosition = 0;
                }
            }, Math.random() * 100 + 50); // Randomize the falling speed per character
        }
    };

    generateMatrixEffect();

    activateSections(); // Initial check on page load
    // generateMatrixEffect();

});


