const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 20)

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }
let blurrMax=30
let opacityMax=1
let blur=(load*blurrMax)/100
let opacity=(load*opacityMax)/100

  loadText.innerText = `${load}%`

  loadText.style.opacity =opacityMax-opacity
   bg.style.filter=`blur(${blurrMax-blur}px)`

   //   bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`   
  //loadText.style.opacity=scale(load,0,100,1,0)
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}