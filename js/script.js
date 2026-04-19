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
  const h1Element = header.querySelector('h1');
  const navLinks = header.querySelectorAll('.nav-list-container a');
  
  const scrollThreshold = 200;
  let hasScrolledPast = false;

  window.addEventListener('scroll', () => {
    const isScrolledPast = window.scrollY > scrollThreshold;

    if (isScrolledPast && !hasScrolledPast) {
      header.classList.add('color-change');
      if (h1Element) h1Element.style.color = '#ffffff';
      navLinks.forEach(link => link.style.color = '#ffffff');
      hasScrolledPast = true;
    } else if (!isScrolledPast && hasScrolledPast) {
      header.classList.remove('color-change');
      if (h1Element) h1Element.style.color = '';
      navLinks.forEach(link => link.style.color = '');
      hasScrolledPast = false;
    }
  });
}
