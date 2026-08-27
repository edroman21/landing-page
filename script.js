// Seleccionamos el botón y la lista
const toggleBtn = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Agregamos un event listener al botón
toggleBtn.addEventListener('click', () => {
  // Alternamos la clase 'nav__list--show' en la lista
  navMenu.classList.toggle('nav__list--show');
});