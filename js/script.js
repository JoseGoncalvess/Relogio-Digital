let hora = document.getElementById('horas')
let minuto = document.getElementById('minutos')
let segundos = document.getElementById('segundos')
let milis = document.getElementById('mili')

var mili = '00'
var sec = '00'
var min = '00'
var hr = '00'
var pausa
var stoped

function start() {
  //setinterval é uma funcion que chama a outro baseada no tempo que se coloca no 2 parametro
  time()
  pausa = setInterval(time, 10)
}
function paused() {
  clearInterval(pausa)
}
function stop() {
  clearInterval(pausa)
  milis.innerText = '00'
  segundos.innerText = '00'
  minuto.innerText = '00'
  hora.innerText = '00'
}

function time() {
  mili++
  if (mili == 60) {
    sec++
    mili = 00
  } else if (sec == 60) {
    min++
    sec = 00
  } else if (min == 60) {
    hr++
    min = 00
  }
  milis.innerText = mili
  segundos.innerText = sec
  minuto.innerText = min
  hora.innerText = hr
}
