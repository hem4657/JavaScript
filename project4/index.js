let inputData =document.getElementById("input")
let buttonData = document.getElementById("button");
let cityName = document.getElementById("city-name");
let cityTime = document.getElementById("city-time");
let cityTemp = document.getElementById("city-temp");

async function fetchData(data){

    let respose = await fetch(`http://api.weatherapi.com/v1/current.json?key=650f61a1c3414a818ae35712251905&q=${data}&aqi=yes`);
    return await respose.json();
}

buttonData.addEventListener("click", async ()=>{
  let value = inputData.value;
  let result = await fetchData(value);
  cityName.innerText = result.location.country;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
})


//http://api.weatherapi.com/v1/current.json?key=650f61a1c3414a818ae35712251905&q=London&aqi=no