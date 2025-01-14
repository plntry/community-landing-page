document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggleBtn = document.querySelector('.navbar__mobile-menu-action--toggle-menu');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  console.log(mobileMenuToggleBtn, mobileMenu);
  

  mobileMenuToggleBtn.addEventListener("click", function () {
    console.log('test');
    
    mobileMenu.classList.toggle("navbar__mobile-menu-items--active");
  });
});