const scrollToTop = document.querySelector('.scroll-to-top');

window.onscroll = function() {
  if (document.documentElement.scrollTop > 200) {
    scrollToTop.style.opacity = '0.5';
    scrollToTop.style.cursor = 'pointer';
  } else {
    scrollToTop.style.opacity = '0';
    scrollToTop.style.cursor = 'default';
  }
};

scrollToTop.addEventListener('click', () => {
  document.documentElement.scrollTop = 0;
});
