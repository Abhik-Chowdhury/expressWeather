const searchBtn = document.getElementById('searchBtn');
const cityName = document.getElementById('cityName');
const city = document.getElementById('city');
const temp_real = document.getElementById('temp_real');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');

const day = document.getElementById('day');
const Today_date = document.getElementById('Today_date');








const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal=== ""){
          city_display.innerText=`Plz write the name before search`
          dataHide.classList.add('data_hide')
    }
  
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=812fab1fe99118806aa2765054db4fb8&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            const arrayData = [data];
            temp_real.innerText = arrayData[0].main.temp;
            // temp_status.innerText = 
            city_display.innerText= `${arrayData[0].name}, ${arrayData[0].sys.country}`;

            const tempStatus = arrayData[0].weather[0].main;
            // The Weather Icon Change
            if (tempStatus == "Sunny" ||tempStatus == "Clear" ) {
                temp_status.innerHTML =
                  " <i class='fa-solid fa-sun' style='color: #F27400;'></i>";
              } else if (tempStatus == "Clouds") {
                temp_status.innerHTML =
                  "<i class='fa-solid fa-cloud' style='color: #fff;'></i>";
              } else if (tempStatus == "Rain") {
                temp_status.innerHTML =
                //   "<i class='fas  fa-cloud-rain' style='color: #166cce;'></i>";
                  "<i class='fa-solid fa-cloud-rain'></i>"
            } else if(tempStatus == "Haze"){
                temp_status.innerHTML = 
                "<i class='fa-solid fa-smog' style='color: #166cce;'></i>"
            } 
              else {
                temp_status.innerHTML =
                  " <i class='fa-solid fa-cloud-bolt' style='color: #166cce;'></i>";
              }

            dataHide.classList.remove('data_hide');
        }catch{
            city_display.innerText=`Plz enter city name properly`;
            dataHide.classList.add('data_hide');
            return; 
        }     
    }
  
}

searchBtn.addEventListener('click',getInfo);