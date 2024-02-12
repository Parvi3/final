const btnChatMobile = document.querySelector('.chat-mobile');
const btnChatTablet = document.querySelector('.chat-tablet');
const btnChatDesktop = document.querySelector('.chat-desktop');
const btnCross = document.querySelector('.feedback__cross');
const feedback = document.querySelector('.feedback');
const asideLeft = document.querySelector('.aside-left');
btnChatMobile.addEventListener('click', () => {
  feedback.style.display = 'flex';
  asideLeft.style.opacity = '5%';
  setTimeout(() => {
    asideLeft.style.display = 'none';
    feedback.style.opacity = '96.05%';
  }, 300);
});
btnChatTablet.addEventListener('click', () => {
  feedback.style.display = 'flex';
  feedback.style.transition = 'opacity 0.1s ease';
  setTimeout(() => {
    feedback.style.opacity = '96.05%';
  }, 300);
});
btnChatDesktop.addEventListener('click', () => {
  feedback.style.display = 'flex';
  feedback.style.transition = 'opacity 0.1s ease';
  setTimeout(() => {
    asideLeft.style.display = 'none';
    feedback.style.opacity = '96.05%';
  }, 300);
});
btnCross.addEventListener('click', () => {
  feedback.style.opacity = '0';
  feedback.style.transition = 'opacity 0.1s ease';
  feedback.style.display = 'none';
});
