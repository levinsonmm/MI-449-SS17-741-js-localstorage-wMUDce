if (parseInt(window.localStorage.getItem('count'))) {
  var current = parseInt(window.localStorage.getItem('count'))
  window.localStorage.setItem('count', current + 1)
} else {
  window.localStorage.setItem('count', 1)
  document.getElementById('change').innerHTML = 'NIGHT MODE'
  window.localStorage.setItem('theme', 'day')
}
document.getElementById('visit').innerHTML = window.localStorage.getItem('count')
if (determineTheme() === 'day') {
  setDay()
} else {
  setNight()
}

var changeButton = document.getElementById('change')
changeButton.addEventListener('click', function () {
  if (determineTheme() === 'day') {
    setNight()
  } else {
    setDay()
  }
})

function determineTheme () {
  if (window.localStorage.getItem('theme') === 'night') {
    return 'night'
  } else {
    return 'day'
  }
}

function setDay () {
  document.body.setAttribute('id', 'day')
  window.localStorage.setItem('theme', 'day')
  document.getElementById('message').innerHTML = 'YOU\'RE IN DAY MODE'
  document.getElementById('change').innerHTML = 'SWITCH TO NIGHT MODE'
}

function setNight () {
  document.body.setAttribute('id', 'night')
  window.localStorage.setItem('theme', 'night')
  document.getElementById('message').innerHTML = 'YOU\'RE IN NIGHT MODE'
  document.getElementById('change').innerHTML = 'SWITCH TO DAY MODE'
}
