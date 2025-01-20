document.addEventListener("DOMContentLoaded", function () {
  // Toggle Theme
  const themeToggleBtns = document.querySelectorAll(
    ".navbar__menu-theme, .navbar__mobile-menu-action--toggle-theme"
  );
  const body = document.body;

  themeToggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      body.classList.toggle("body--theme-dark");
    });
  });

  // Toggle Mobile Menu
  const mobileMenuToggleBtn = document.querySelector(
    ".navbar__mobile-menu-action--toggle-menu"
  );
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  mobileMenuToggleBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("navbar__mobile-menu-items--active");
  });
});

// Change navbar bg color on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});
