const toggleButton = document.querySelector('#themeswitcher');

function switchTheme(e) {
  if(e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleButton.addEventListener('change', switchTheme, false);