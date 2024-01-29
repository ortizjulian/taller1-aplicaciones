
const hamburgers = document.querySelectorAll('.fa-bars');
const sidePanel = document.querySelector('.side-panel');
const body = document.querySelector('body');
const close = document.querySelector('.fa-times');

hamburgers.forEach(hamburger => hamburger.addEventListener('click', ()=> {
    sidePanel.classList.toggle('open');
    body.classList.toggle('stop-scrolling');
}))

close.addEventListener('click', ()=> {
    sidePanel.classList.toggle('open');
    body.classList.toggle('stop-scrolling');
})


