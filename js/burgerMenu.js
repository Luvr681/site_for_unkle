const burger = document.querySelector('.burger')
const modalMenu = document.querySelector('.header__nav.mobile')

burger.addEventListener('click', () => {
  modalMenu.classList.toggle('active')
})