const api = {
    //link to get the access
    endpoint:"https://api.openweathermap.org/data/2.5/",
     //API KEY
    key: "YOUR API KEY" 
    
}

const input = document.querySelector("#input");
input.addEventListener("keydown", enter);

function enter (e) {
    if(e.keyCode === 13) {
        getInfo (input.value);
    }
}

async function getInfo (data) {
   const res = await fetch(`${api.endpoint}weather?q=${data}&units=metric&appID=${api.key}`);
   const result = await res.json();
   displayResult(result);
}

function displayResult (result) {
   let city = document.querySelector("#city");
   city.textContent=`${result.name}, ${result.sys.country}`;

   //DATE
   getOurDate();

   let temperature = document.querySelector("#temperature");
   temperature.innerHTML=`${Math.round(result.main.temp)}<span>°</span>`;

   let feelsLike = document.querySelector("#feelsLike");
   feelsLike.innerHTML= "Feels like:" + `${Math.round(result.main.feels_like)} <span>°</span>`;

   let condition = document.querySelector("#condition");
   condition.textContent = `${result.weather[0].main}`;

   let variation = document.querySelector("#variation"); 
   variation.innerHTML="Min: "+`${Math.round(result.main.temp_min)}<span>°</span>` +  "  Max: "+`${Math.round(result.main.temp_max)}<span>°</span>`;

}

function getOurDate() {

    //1 - Today's date
    const myDate = new Date;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


    //2 - Week day
    let weekDay = document.querySelector("#date").innerHTML = days[myDate.getDay()];
    
    //3 - Date
    let day=myDate.getDate();

    //4 - Month
    let month = months[myDate.getMonth()];
   
    //5 - Year
    let year = myDate.getFullYear();

    let todayDate = document.querySelector("#date");
    todayDate.textContent = `${weekDay}` + " " + `${day}` + " " + `${month}` + " " + `${year}`;
}
   
