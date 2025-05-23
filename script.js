const now=new Date();
// const time=now.toLocaleTimeString("en-US");
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');

const time=`${hours}:${minutes}`;


const dayOfWeek=now.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = days[dayOfWeek];

console.log(time,currentDay);


const day=document.querySelector(".day div");

day.textContent=`${currentDay}, ${time}`;