let hora = document.getElementById('horas')
let minuto = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
  let datatoday = new Date()
  let h = datatoday.getHours()
  let m = datatoday.getMinutes()
  let s = datatoday.getSeconds()
  if (h < 10) h = '0' + h
  if (m < 10) m = '0' + m
  if (s < 10) s = '0' + s
  hora.textContent = h
  minuto.textContent = m
  segundos.textContent = s
})

/*
window.addEventListener('click', function(){
  const audio  = document.getElementById('music');
  audio.play();
  audio.volume = 0.2  })
*/
