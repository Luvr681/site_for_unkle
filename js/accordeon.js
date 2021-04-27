const blocks = document.querySelectorAll('.pricelist__accordeon__title__block')
const btns = document.querySelectorAll('.pricelist__accordeon__btn')
const accordeonContents = document.querySelectorAll('.pricelist__accordeon__content')

blocks.forEach((btn, index) => {
  btn.addEventListener('click', event => {
    event.preventDefault()
    btns[index].innerHTML = btns[index].innerHTML === '+' ? '-' : '+'

    if (accordeonContents[index].style.maxHeight) 
      accordeonContents[index].style.maxHeight = null
    else 
      accordeonContents[index].style.maxHeight = accordeonContents[index].scrollHeight + "px";
  })
})