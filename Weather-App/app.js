let btn=document.querySelector("button");
let input=document.querySelector("input");
let temperature=document.querySelector(".temperature");
let city=document.querySelector(".city")
let percent=document.querySelector(".percent");
let speed=document.querySelector(".speed");


async function getWeather(){
    let cityName=input.value;
    if(cityName==""){
        alert("Enter a city Name");
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=408ccae09dc851fa7a5aec57b1785ab3&units=metric`
            let apicall=await fetch(url);

            if (!apicall.ok) {
            throw new Error("City not found");
        }

            let data= await apicall.json();
            let tempValue=data.main.temp;
            temperature.innerHTML=`${tempValue}° C`;
            city.innerHTML=cityName;
            let windSpeed=data.wind.speed;
            speed.innerHTML=`${windSpeed}km/hr`;
            let humidityLvl=data.main.humidity;
            percent.innerHTML=`${humidityLvl}%`
        }catch{
           alert("ERROR OCCURED");
        }
    }
    
}



btn.addEventListener("click",getWeather);