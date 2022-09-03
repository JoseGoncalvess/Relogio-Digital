let hora = document.getElementById('horas')
let minuto = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

var sec = 00
var min = '00'
var hr = 00
var pausa
var stoped

function start() {
  //setinterval é uma funcion que chama a outro baseada no tempo que se coloca no 2 parametro
  time()
  pausa = setInterval(time, 1)
}
function paused() {
  clearInterval(pausa)
}
function stop() {
  clearInterval(pausa)
  segundos.innerText = '00'
  minuto.innerText = '00'
  hora.innerText = '00'
}

function time() {
  sec++

  if (sec == 60) {
    min++
    if (min < 10) {
      min = '0' + min
    }
    sec = 00
  } else if (min == 60) {
    hr++
    if (hr < 10) {
      hr = '0' + hr
    }
    min = 00
  }
  segundos.innerText = sec
  minuto.innerText = min
  hora.innerText = hr
}
