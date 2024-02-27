// Constanst Declarations : ----------------------
const burgerElement = document.querySelector('.burger');
const menuOptionsDiv = document.querySelector('.menu-options-div');
const navUl = document.querySelector('.nav-ul');
// ------------------------------------------------

burgerElement.addEventListener('click', () => {
  const isExpanded = burgerElement.getAttribute('aria-expanded') === 'true';
  burgerElement.setAttribute('aria-expanded', !isExpanded);
  menuOptionsDiv.classList.toggle('show'); // Toggle visibility of the menu
  navUl.classList.toggle('appear'); // Toggle visibility of the menu
});
document.addEventListener('DOMContentLoaded', () => {
  const infinityMirror = document.querySelector('.infinity-mirror');

  // Example: Add a new layer every 5 seconds up to a maximum number
  let maxLayers = 5;
  setInterval(() => {
    if (infinityMirror.children.length < maxLayers) {
      let newLayer = document.createElement('div');
      newLayer.className = 'mirror-layer';
      newLayer.style.width = `${80 - 20 * infinityMirror.children.length}%`;
      newLayer.style.height = `${80 - 20 * infinityMirror.children.length}%`;
      newLayer.style.animationDelay = `${2 * infinityMirror.children.length}s`;
      infinityMirror.appendChild(newLayer);
    }
  }, 2000);
});

