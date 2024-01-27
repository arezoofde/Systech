
console.log('fieeeeeeerst')
let cardboxSection1 = document.getElementById("section1");
let cardboxSection2 = document.getElementById("section2");
let cardboxSection3 = document.getElementById("section3");
let cardboxSection4 = document.getElementById("section4");
let boxText = document.querySelectorAll("box-text");


function showText(boxTextId) {
  // یافتن تمام المان‌های boxText و پنهان کردن آن‌ها
  let allBoxsText = document.querySelectorAll('.box-text');
  allBoxsText.forEach(function(boxText) {
    boxText.classList.add('hidden');
    boxText.classList.remove('visible');
  });

  boxText.classList.remove('hidden');
  boxText.classList.add('visible');
}
cardboxSection1.addEventListener("click", function () {
  showText(boxText);
  
});


cardboxSection2.addEventListener("click", function () {
  showText('boxText2');
});

cardboxSection3.addEventListener("click", function () {
  showText('boxText3');
});

cardboxSection4.addEventListener("click", function () {
  showText('boxText4');
});
