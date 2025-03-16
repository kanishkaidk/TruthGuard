document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scrolling Effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Scroll Reveal Animations (Using Intersection Observer)
    const revealElements = document.querySelectorAll(".container, .feature, .step, .testimonial");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(el => observer.observe(el));

    // Add to Chrome Button - Direct Download
    const addToChromeBtn = document.querySelector(".cta");
    addToChromeBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Replace YOUR_FILE_ID with the actual Google Drive file ID
        const chromeExtensionLink = "";
        
        const a = document.createElement("a");
        a.href = chromeExtensionLink;
        a.download = "truthguard-extension.zip";  // Sets the downloaded file name
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        // Show popup confirmation
        showPopup("TruthGuard Download Started! 🚀", "Please check your downloads folder.");
    });

    // Dark Mode Toggle with Local Storage
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.innerText = "🌙 Dark Mode";
    toggleDarkMode.classList.add("dark-mode-toggle");
    document.body.appendChild(toggleDarkMode);

    // Check if user has a saved preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleDarkMode.innerText = "☀️ Light Mode";
    }

    toggleDarkMode.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
        toggleDarkMode.innerText = isDarkMode ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Function to show a popup message
    function showPopup(title, message) {
        const overlay = document.createElement("div");
        overlay.className = "overlay";
        overlay.innerHTML = `
            <div class="popup">
                <h2>${title}</h2>
                <p>${message}</p>
                <button class="close-popup">OK</button>
            </div>
        `;
        document.body.appendChild(overlay);
        document.querySelector(".close-popup").addEventListener("click", () => {
            overlay.remove();
        });
    }
});
