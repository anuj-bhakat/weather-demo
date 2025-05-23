function updateDayTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString('en-US', { day: 'numeric', month: 'long' });

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = days[now.getDay()];

  const dayDiv = document.querySelector(".day div");
  dayDiv.textContent = `${currentDay}, ${formattedDate}`;
}

updateDayTime();




const API_KEY="1d5d3583c5b4a70fd3731ea84a86e347";
const BASE_URL="https://api.openweathermap.org/data/2.5/weather";

const place=document.querySelector(".place div");
const value=document.querySelector("#value");
const desc=document.querySelector("#desc");
const wind=document.querySelector("#wind");
const humidity=document.querySelector("#humidity");

  async function getWeather() {
    const city=document.querySelector("#city").value;
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;

    try{
      const response=await fetch(url);
      const data= await response.json();
      console.log(data);

      
      if(response.ok){
        place.textContent=`${data.name}`;
        value.textContent=`${Math.round(data.main.temp)}`;

        const capitalizeWords = str =>  str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
        const description = capitalizeWords(data.weather[0].description);
        desc.textContent=`${description}`;

        wind.textContent=`${data.wind.speed} m/s`;
        humidity.textContent=`${data.main.humidity}`;

      }else{
        place.innerText=data.message;
      }
    }catch(error){
      console.log("Error fetching weather:", error);
      place.innerText="Error Fetching Weather Details";
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  getWeather();
});