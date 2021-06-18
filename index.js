
const dino = document.getElementById('dino')
const cactus = document.getElementById('cactus')

document.addEventListener('keydown', function(event) {
    jump()
})

function jump() {
    if(dino.classList != 'jump')
    {
        dino.classList.add('jump')
    }
  setTimeout(function(){
      dino.classList.remove('jump')
  },300)
}

let isAlive = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))

    if(cactusLeft < 60 && cactusLeft > 0 && dinoTop>= 240) {
        alert('Конец инры ')
    }
},30)

document.querySelector('#b1').hidden = true
document.querySelector('#cactus').hidden = true
document.querySelector('#timer').hidden = true

function doIt(){
    document.querySelector('#cactus').hidden=true;
    document.querySelector('#b1').hidden=true;
    document.querySelector('#b2').hidden=false;
    
}
function doIt2(){   
      
    document.querySelector('#cactus').hidden=false;
    document.querySelector('#b1').hidden=false;
    document.querySelector('#b2').hidden=true;
}

       