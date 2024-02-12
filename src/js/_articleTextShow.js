const articleBtn = document.querySelector('.article__button');
const articleBtnHide = document.querySelector('.article__button__hide');
const articleTextBig = document.querySelector('.article__text_big');
const articleTextSmall = document.querySelector('.article__text_small');

articleBtn.addEventListener('click', () => {
  articleTextBig.style.display = 'block';
  articleTextSmall.style.display = 'none';
  articleBtn.style.display = 'none';
  articleBtnHide.style.display = 'block';
});
articleBtnHide.addEventListener('click', () => {
  articleTextBig.style.display = 'none';
  articleTextSmall.style.display = 'block';
  articleBtnHide.style.display = 'none';
  articleBtn.style.display = 'block';
});
