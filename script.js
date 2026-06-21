/*
 * Simple JavaScript utilities for La Cocina de Mamá site.
 *
 * Handles mobile navigation toggling and provides a smooth scroll for
 * anchor links. This keeps the website light and fast-loading.
 */

// Close mobile navigation when a link is clicked
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  });
});