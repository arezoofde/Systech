let guess = document.querySelector("#guess"); //Button guess
let inputNumber = document.querySelector("#inputNumber") //enter number user
let counterElement = document.querySelector("#counter") //counter forsat ha
let alertBox = document.getElementById("alert") //counter forsat ha
let usercounter = 10;
let countainer = 0;
counterElement.innerHTML = usercounter;

function getroundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
let randomNumber = getroundomNumber(100, 1)

guess.addEventListener("click", function () {
    if (countainer < 10) {
        let inputVlue = inputNumber.value
        if (inputVlue > randomNumber) {
            alertBox.innerHTML = ` حدس مورد نظر شما بزرگتر از عدد انتخابی است`;
            alertBox.style.color = 'red';
            alertBox.classList.add("alert-show p" );
        } else if (inputVlue < randomNumber) {
            alertBox.innerHTML = ` حدس مورد نظر شما کوچکتر از عدد انتخابی است`;
            alertBox.style.color = 'blue';
            alertBox.classList.add("alert-show p");


        } else {
            alertBox.innerHTML = `ایول!! درست حدس زدی.`;
            alertBox.style.color = 'green';
            alertBox.classList.add("alert-show p");

        }
        countainer++;
        counterElement.innerHTML = usercounter - countainer;
    }    else {
        alertBox.innerHTML = `متاسفم! تعداد حدس شما به پایان رسید`;
        alertBox.style.color = 'yellow';
        alertBox.classList.add("alert-show p")
    }
})
