const toggleButton = document.querySelector('#checkbox');
const html = document.querySelector('html');

function switchTheme(e) {
  if(toggleButton.checked) {
    html.className = "theme-light";
  } else {
    html.className = "theme-dark";
  }
}

toggleButton.addEventListener('change', switchTheme);
window.addEventListener('load', switchTheme);