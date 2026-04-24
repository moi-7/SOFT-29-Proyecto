/*==========================================
        Cierra el menu de navegación
==========================================*/
document.addEventListener('DOMContentLoaded', () => {
  const menuCheckbox = document.getElementById('menu_hamburguesa_interruptor');
  const navLinks = document.querySelectorAll('.nav-list-container a');
  const siteNav = document.querySelector('.site-nav-container');


  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuCheckbox.checked = false;
    });
  });


  document.addEventListener('click', (event) => {
    if (!menuCheckbox.checked) return;
    if (siteNav.contains(event.target)) return;

    menuCheckbox.checked = false;
  });
});


/*==========================================
   Cambia el color de barra de navegación
==========================================*/
const header = document.querySelector('.header');

if (header) {
  // Constantes
  const SCROLL_THRESHOLD = 200;
  const SCROLLED_TEXT_COLOR = '#ffffff';
  const DEFAULT_TEXT_COLOR = '';

  const h1Element = header.querySelector('h1');
  const navLinks = header.querySelectorAll('.nav-list-container a');

  let wasScrolledPast = false;

  // Función auxiliar para actualizar colores
  const updateHeaderColors = (textColor) => {
    h1Element.style.color = textColor;
    navLinks.forEach(link => link.style.color = textColor);
  };

  window.addEventListener('scroll', () => {
    const isScrolledPast = window.scrollY > SCROLL_THRESHOLD;

    // Cambia los colores solo si hay un cambio de estado del scroll
    if (isScrolledPast !== wasScrolledPast) {
      if (isScrolledPast) {
        header.classList.add('color-change');
        updateHeaderColors(SCROLLED_TEXT_COLOR);
      } else {
        header.classList.remove('color-change');
        updateHeaderColors(DEFAULT_TEXT_COLOR);
      }
      wasScrolledPast = isScrolledPast;
    }
  });
}
