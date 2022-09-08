const images = document.querySelectorAll('section-1-images')
let i = 1;

setInterval(() => {
 const icon = document.querySelector('.section-1-images.change')

 icon.classList.remove('change')

 icon.nextElementSibling.classList.add('change')


}, 1000)