// Charger et injecter le header
fetch("./partials/header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // --- Menu mobile ---
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
        // Optionnel : changer l’icône ☰ ↔ ✖
        menuBtn.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✖";
      });
    }

    // --- Dark mode ---
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
      // Vérifier le thème sauvegardé
      if (localStorage.getItem("theme") === "dark") {
        document.documentElement.classList.add("dark");
        themeToggle.textContent = "☀️";
      } else {
        themeToggle.textContent = "🌙";
      }

      // Toggle au clic
      themeToggle.addEventListener("click", () => {
        document.documentElement.classList.toggle("dark");
        if (document.documentElement.classList.contains("dark")) {
          localStorage.setItem("theme", "dark");
          themeToggle.textContent = "☀️";
        } else {
          localStorage.setItem("theme", "light");
          themeToggle.textContent = "🌙";
        }
      });
    }
  })
  .catch(err => console.error("Erreur de chargement du header :", err));
