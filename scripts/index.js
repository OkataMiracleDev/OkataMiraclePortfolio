document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const cancelButton = document.getElementById('cancel-button');

  if (menuButton && mobileMenu && cancelButton) {
    menuButton.addEventListener('click', () => {
      // Open the mobile menu
      mobileMenu.classList.remove('translate-y-full');
    });

    // Close when clicking cancel button
    cancelButton.addEventListener('click', () => {
      mobileMenu.classList.add('translate-y-full');
    });

    // Close when clicking nav links
    const navLinks = mobileMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-y-full');
      });
    });
  }
});
