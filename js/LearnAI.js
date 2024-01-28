let currentText = null

function showText(buttonID) {
  if (currentText !== null) {
    currentText.style.display = 'none'
  }
  currentText = document.getElementById('text' + buttonID[buttonID.length -1]) 
  currentText.style.display = 'block'

}