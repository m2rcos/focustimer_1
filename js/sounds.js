export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const buttonFire = new Audio('../files/Lareira.wav?raw=true')
  const buttonRain = new Audio('../files/Chuva.wav?raw=true')
  const buttonForrest = new Audio('../files/Floresta.wav?raw=true')
  const buttonCoffee = new Audio('../files/Cafeteria.wav?raw=true')

  buttonFire.loop = true
  buttonRain.loop = true

  function pressButtonStop() {
    buttonFire.pause()
    buttonRain.pause()
    buttonForrest.pause()
    buttonCoffee.pause()
  }

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function pressButtonFirePlace() {
    buttonFire.play()
  }

  function pressButtonRain() {
    buttonRain.play()
  }

  function pressButtonForrest() {
    buttonForrest.play()
  }

  function pressButtonCoffee() {
    buttonCoffee.play()
  }

  return {
    pressButton,
    timeEnd,
    pressButtonFirePlace,
    pressButtonRain,
    pressButtonForrest,
    pressButtonCoffee,
    pressButtonStop
  }
}