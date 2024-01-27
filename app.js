const lat=59.341125; //The longitude value
const lon=17.938935; //The latitude value
const key= "4466c247f017fb4834309ffb220a6879"; //The key to use the API
const iconElement = document.querySelector(".icon"); //Selects the icon-class (the image)
const tempElement = document.querySelect
or(".temp"); //Selects the temp-class text
const riseElement = document.querySelector(".sunrise"); //Selects the sunrise-class text
const setElement = document.querySelector(".sunset"); //Selects the sunset-class text

const weather ={};



const kelvin = 273; //difference between kelvin and celcius

let api=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`;

function displayWeather(){
    iconElement.innerHTML=`<img src="img/${weather.icon}.png" alt="" widht="300px" height="300px"/>`;
    tempElement.innerHTML=`${weather.temp} ° C`;
    riseElement.innerHTML=`${weather.sunrise}`;
    setElement.innerHTML=`${weather.sunset}`;
}


fetch(api)
    .then(function(response){
        let data=response.json();
        return data;
    })
    .then(function(data){
        let date1 = new Date(data.sys.sunrise*1000);
        weather.sunrise = date1.toLocaleTimeString("it-IT");
        let date2 = new Date(data.sys.sunset*1000);
        weather.sunset = date2.toLocaleTimeString("it-IT");
        weather.icon = data.weather[0].icon;
        weather.temp= Math.floor(data.main.temp-kelvin);
    })
    .then(function(){
        displayWeather();
    })








/*
fetch(api)
    .then(function(response){
        let data=response.json();
        return data;
    })
    .then(function(data){
        weather.temp = Math.floor(data.main.temp - kelvin);
        weather.sunrise = data.sys.sunrise;
        weather.sunset = data.sys.sunset;
        weather.icon = data.weather[0].icon;
    })  
    .then(function(){
        displayWeather();
    })


*/       