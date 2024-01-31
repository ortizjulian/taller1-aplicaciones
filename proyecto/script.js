

const playButtons = document.querySelectorAll('.fa-play');

playButtons.forEach(btn => btn.addEventListener('click', ()=> {
    if(btn.classList.contains('fa-pause')){
        btn.classList.replace('fa-pause', 'fa-play');
        //grab the audio element and use .play()
    } else {
        btn.classList.replace('fa-play', 'fa-pause');
        // grab the audio element and use .pause()
    }
}))

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



document.body.onmousemove = function(e) {
    document.documentElement.style.setProperty (
      '--x', (
        e.clientX+window.scrollX
      )
      + 'px'
    );
    document.documentElement.style.setProperty (
      '--y', (
        e.clientY+window.scrollY
      ) 
      + 'px'
    );
  }
