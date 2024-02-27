let addBTN = document.getElementById('addbtn')
let resetBTN = document.getElementById('reset')
let minsBTN = document.getElementById('minbtn')
let counter = document.getElementById('counter')

addBTN.addEventListener("click" , function(){
    if (counter.innerHTML < 10) {
        counter.innerHTML = Number(counter.innerHTML) + 1;
        minsBTN.classList.remove("disabled")
    }else{
        addBTN.classList.add("disabled")
    }
})

minsBTN.addEventListener("click" , function(){
    if(counter.innerHTML > -10){
        counter.innerHTML -= 1
        addBTN.classList.remove("disabled")

    }
    else{
        minsBTN.classList.add("disabled")
    }
})

resetBTN.addEventListener("click" , function(){
    counter.innerHTML = 0;
})