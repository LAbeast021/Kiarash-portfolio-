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
  let maxLayers = 6;
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


document.addEventListener('DOMContentLoaded', function() {
  const target = "Kiarash Hesampour";
  const length = target.length;
  const nameElement = document.getElementById('animatedName');
  let interval = 2000; // Time between each complete animation cycle

  function randomChar() {
    return String.fromCharCode(33 + Math.floor(Math.random() * 94)); // Generates a random character from printable characters
  }

  function animateName(position) {
    if (position < length) {
      let text = '';
      for (let i = 0; i < length; i++) {
        text += i <= position ? target[i] : randomChar();
      }
      nameElement.textContent = text;
      setTimeout(() => { animateName(position + 1); }, 300); // Move to the next character after 100ms
    } else {
      nameElement.textContent = target; // Set final text after animation
      setTimeout(() => { animateName(0); }, interval); // Wait for 'interval' milliseconds before restarting animation
    }
  }

  animateName(0); // Start the animation
});


