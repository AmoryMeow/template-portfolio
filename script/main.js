
const openMenu = document.querySelector('.intro__open-menu');
const header = document.querySelector('.header');
const closeMenu = document.querySelector('.header__close-menu');

const langLink = document.querySelectorAll('.lang__link');

openMenu.addEventListener('click', () => {
  header.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
  header.style.display = 'none';
  document.body.style.overflow = '';
});

langLink.forEach((lang) => {
  /*lang.classList.remove('lang__link_active');*/
  lang.addEventListener('click', () => {

    lang.classList.add('lang__link_active');
  });
});
