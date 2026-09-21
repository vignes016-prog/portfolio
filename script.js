
const MY_EMAIL = 'vignes016@gmail.com';


/* ---------------------------------------------------
   1. Dark / light mode
   --------------------------------------------------- */
const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
  root.setAttribute('data-bs-theme', theme);
  // the button always shows what you will switch TO
  themeBtn.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

// the small script in <head> already picked the starting theme, just sync the button
applyTheme(root.getAttribute('data-bs-theme') || 'light');

themeBtn.addEventListener('click', () => {
  const next = root.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);

  // remember the choice (wrapped in try because some browsers block storage)
  try {
    localStorage.setItem('theme', next);
  } catch (err) {
    console.log('Could not save theme choice');
  }
});



const nav = document.getElementById('mainNav');

function checkScroll() {
  nav.classList.toggle('is-scrolled', window.scrollY > 10);
}

window.addEventListener('scroll', checkScroll, { passive: true });
checkScroll();



const navMenu = document.getElementById('navMenu');

document.querySelectorAll('#navMenu .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
    }
  });
});



  const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // let Bootstrap show the red error messages
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    formNote.textContent = 'Please fill in every field first.';
    return;
  }

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('Portfolio message from ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');

  window.location.href = 'mailto:' + MY_EMAIL + '?subject=' + subject + '&body=' + body;
  formNote.textContent = 'Opening your email app. If nothing happens, email me at ' + MY_EMAIL + '.';
});


/* ---------------------------------------------------
   5. Footer year
   --------------------------------------------------- */
document.getElementById('year').textContent = new Date().getFullYear();