const btnCallMobile = document.querySelector('.call-mobile');
const btnCallTablet = document.querySelector('.call-tablet');
const btnCallDesktop = document.querySelector('.call-desktop');
const btnCallCross = document.querySelector('.request-call__cross');
const requestCall = document.querySelector('.request-call');
const asideLeft = document.querySelector('.aside-left');

btnCallMobile.addEventListener('click', () => {
  requestCall.style.display = 'flex';
  asideLeft.style.opacity = '5%';
  setTimeout(() => {
    asideLeft.style.display = 'none';
    requestCall.style.opacity = '96.05%';
  }, 300);
});
btnCallTablet.addEventListener('click', () => {
  requestCall.style.display = 'flex';
  requestCall.style.transition = 'opacity 0.1s ease';
  setTimeout(() => {
    requestCall.style.opacity = '96.05%';
  }, 300);
});
btnCallDesktop.addEventListener('click', () => {
  requestCall.style.display = 'flex';
  requestCall.style.transition = 'opacity 0.1s ease';
  setTimeout(() => {
    asideLeft.style.display = 'none';
    requestCall.style.opacity = '96.05%';
  }, 300);
});
btnCallCross.addEventListener('click', () => {
  requestCall.style.opacity = '0';
  requestCall.style.display = 'none';
});
