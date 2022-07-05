const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-item');
const header = document.querySelector('#header');

function mobileMenu() {
  hamburger.classList.toggle('hamburger-open');
  navMenu.classList.toggle('open');

  navLinks.forEach((navLinks) => {
    navLinks.classList.toggle('fade');
  });
}

function closeMenu() {
  hamburger.classList.remove('hamburger-open');
  navMenu.classList.remove('open');

  navLinks.forEach((navLink) => {
    navLink.classList.remove('fade');
  });
}

hamburger.addEventListener('click', mobileMenu);
navLinks.forEach((n) => n.addEventListener('click', closeMenu));

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0);
});
