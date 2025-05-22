const now=new Date();
const time=now.toLocaleTimeString("en-US");
const dayOfWeek=now.getDay();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const currentDay = days[dayOfWeek];

console.log(time,currentDay);


const day=document.querySelector(".day div");

day.textContent=`${currentDay}, ${time}`;