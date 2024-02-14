const burgerElement = document.querySelector('.burger');

burgerElement.addEventListener('click', () => {
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true'; 
  burgerElement.setAttribute('aria-expanded', !isExpanded);
});