const burgerElement = document.querySelector('.burger');
const menuOptionsDiv = document.querySelector('.menu-options-div');

burgerElement.addEventListener('click', () => {
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true';
  burgerElement.setAttribute('aria-expanded', !isExpanded);
  menuOptionsDiv.classList.toggle('show'); // Toggle visibility of the menu
});
