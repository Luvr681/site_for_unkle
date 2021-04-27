const sliderBlocks = document.querySelectorAll('.slider__slide')
const modalExamples = document.querySelectorAll('.modal__examples')

const firstModalExample = document.querySelector('#firstModalSlider')
const secondModalExample = document.querySelector('#secondModalSlider')
const thirdModalExample = document.querySelector('#thirdModalSlider')

const toggleModalWindow = (flag, event, classList)=> {
  if (flag) {
    if (classList.contains('1'))
      firstModalExample.classList.add('active') 
    if (classList.contains('2'))
      secondModalExample.classList.add('active') 
    if (classList.contains('3'))
      thirdModalExample.classList.add('active') 
    document.body.classList.add('no__scroll') 
    return 
  }
  if (event.target.classList.contains('modal__examples')) {
    modalExamples.forEach(modalExample => {
      modalExample.classList.remove('active') 
    })
    document.body.classList.remove('no__scroll') 
  }
}

sliderBlocks.forEach(sliderBlock => {
  sliderBlock.addEventListener('click', () => {
    toggleModalWindow(true, false, sliderBlock.classList)
    isOpenModal = true 
  })
})

modalExamples.forEach(modalExample => {
  modalExample.addEventListener('click', function(event) {
    toggleModalWindow(false, event)
    isOpenModal = false 
  })
})
