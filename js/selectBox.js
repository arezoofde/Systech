let selectBox = document.querySelector(".select-box")
let selectOption = document.querySelector(".select-option")
let soValue = document.querySelector("#soValue")
let search = document.querySelector(".search")
let optionSearch = document.querySelector("#optionSearch")
let options = document.querySelector(".options")
let optionsLi = document.querySelectorAll(".options li")
let contentBox = document.querySelector(".content")


selectOption.addEventListener('click' , function () {
    contentBox.classList.toggle('active')
})

optionsLi.forEach(function(optionList) {
    optionList.addEventListener('click', function(){
        text = this.textContent;
        soValue.value = text;
        contentBox.classList.remove('active')
    })
});


optionSearch.addEventListener('keyup',function () {
    var  textValue, liCount ,li;
    var inputValue = this.value;
    li = options.getElementsByTagName('li')
    for (let i = 0; i < li.length; i++) {
        liCount = li[i];
        textValue = liCount.textContent || liCount.innerText;
        if (textValue.indexOf(inputValue) > -1) {
            li[i].style.display = ''
        }else{
            li[i].style.display = 'none'
        }
        
    }
})

