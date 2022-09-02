let hora = document.getElementById('horas')
let minuto = document.getElementById('minutos')
let segundos = document.getElementById('segundos')

const relogio = setInterval(function time() {
  let datatoday = new Date()
  let h = datatoday.getHours()
  let m = datatoday.getMinutes()
  let s = datatoday.getSeconds()
  h = 2
  if (h < 10) h = '0' + h
  if (m < 10) h = '0' + m
  if (s < 10) h = '0' + s
  hora.textContent = h
  minuto.textContent = m
  segundos.textContent = s
})
