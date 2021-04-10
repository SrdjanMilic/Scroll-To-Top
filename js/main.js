const scrollToTop = document.querySelector('.scroll-to-top');

document.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    scrollToTop.style.opacity = '1';
  } else {
    scrollToTop.style.opacity = '0';
  }
};

scrollToTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
