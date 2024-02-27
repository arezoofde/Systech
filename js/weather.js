const checkWeather = async(url) =>{
    let responsive = await fetch(url);
    return await responsive.json()

}
let showbtn = document.getElementById('showWeather')

showbtn.addEventListener("click" , function() {
    const cityName = document.querySelector('#CITY').value;
    console.log(cityName);
    let apikey ="55e373b992ae84c194ac06041cb5249d";
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`;
    let result = checkWeather(url)
    result.then(result => {

    })
    console.log(JSON.stringify(result));
})