fetch("./partials/header.html")
  .then(res => res.text())
  .then(data => {
    // Injecter dans #header
    document.getElementById("header").innerHTML = data;

    // Activer le menu mobile
    const menuBtn = document.getElementById("menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
      });
    }

    // Activer le dark mode
    const themeToggle = document.getElementById("theme-toggle");
    if (themeToggle) {
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
