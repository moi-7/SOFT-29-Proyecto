// document.addEventListener('DOMContentLoaded', () => {
//   const menuCheckbox = document.getElementById('menu_hamburguesa_interruptor');
//   const navLinks = document.querySelectorAll('.nav-list-container a');
//   const siteNav = document.querySelector('.site-nav-container');


//   navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       menuCheckbox.checked = false;
//     });
//   });


//   document.addEventListener('click', (event) => {
//     if (!menuCheckbox.checked) return;
//     if (siteNav.contains(event.target)) return;
    
//     menuCheckbox.checked = false;
//   });
// });