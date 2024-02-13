let currentText = null

function showText(buttonID) {
  if (currentText !== null) {
    currentText.style.display = 'none'
  }
  currentText = document.getElementById('text' + buttonID[buttonID.length -1]) 
  currentText.style.display = 'block'

}
let hoverZoomElements = document.querySelectorAll('.f-hoverzoom ');

hoverZoomElements.forEach( function (element) {
  
  element.addEventListener('mouseover' ,function (event) {
    event.preventDefault();
    element.style.scale = '1.3'
  })


  element.addEventListener('mouseout',function (event) {
    event.preventDefault();
    element.style.scale = '1'
  })
});


