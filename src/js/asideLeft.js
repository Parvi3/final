const asideLeftCross = document.querySelector('.aside-left__cross');
const btnBurger = document.querySelector('.burger');
const asideLeft = document.querySelector('.aside-left');

btnBurger.addEventListener('click', () => {
  asideLeft.style.display = 'block';
  asideLeft.style.transition = 'opacity 0.1s ease';
  setTimeout(() => {
    asideLeft.style.opacity = '96.05%';
  }, 300);
});
asideLeftCross.addEventListener('click', () => {
  asideLeft.style.opacity = '0';
  asideLeft.style.display = 'none';
});
