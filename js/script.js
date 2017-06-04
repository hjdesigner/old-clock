const secondHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hourHand = document.querySelector('.hours');

function setDate(){
 const now = new Date();
 
 const seconds = now.getSeconds();
 const secondsDegress = ((seconds / 60) * 6000);
 secondHand.style.transform = `translateY(-${secondsDegress}px)`;

 const minutes = now.getMinutes();
 const minutesDegress = ((minutes / 60) * 6000);
 minutesHand.style.transform = `translateY(-${minutesDegress}px)`;

 const hours = now.getHours();
 const hoursDegress = (hours * 100) - 100;
 hourHand.style.transform = `translateY(-${hoursDegress}px)`;
 

}

setInterval(setDate, 1000);