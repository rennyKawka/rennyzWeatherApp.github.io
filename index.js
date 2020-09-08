const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cityArea = document.querySelector('.city-name')
const cardBody = document.querySelector('.card-body');
const timeImage = document.querySelector('.card-top img')
const cardInfo = document.querySelector('.back-card')


const spitOutCelcius = (kelvin) =>{

    celcius = Math.round(kelvin - 273.15);
    return celcius;
}

const isDayTime = (icon) => {
    if (icon.includes('d')) {
        return true;

    } else {
        return false;
    }
}

appTitle.textContent = `Weather in, `;

updateMyWeather = (city) => {
    const imageName = city.weather[0].icon;
    const iconSrc = `http://openweathermap.org/img/wn/${imageName}@2x.png`
    cityName.textContent = city.name;
    
    cardBody.innerHTML = `
    <div class="card-mid row">
    <div class="col-8 text-center temp">
        <span>${spitOutCelcius(city.main.temp)}&deg;C</span>
    </div>
    <div class="col-4 condition-temp">
        <p class="condition">${city.weather[0].description}</p>
        <P class="high ">
            <span class=""></span>
            ${spitOutCelcius(city.main.temp_max)}&deg;C</P>
        <p class="low">${spitOutCelcius(city.main.temp_min)}&deg;C</p>
    </div>
    </div>

    <div class="icon-container card shadow mx-auto bg-black">
        <img src="${iconSrc}" class="w_25" alt="">
    </div>
    <div class="card-bottom px-5 py-4 row">
        <div class="col text-center">
            <p>${spitOutCelcius(city.main.feels_like)}&deg;C</p>
            <span>Feels like</span>
        </div> 
        <div class="col text-center">
            <p>${city.main.humidity}%</p>
            <span>Humidity</span>
        </div>
    </div>
    `;
    console.log(city);


    if (isDayTime(imageName)) {
        console.log('Day');
        timeImage.setAttribute('src', 'img/bg/sunny.jpeg');
        if (cityArea.classList.contains('text.light')) {
            cityArea.classList.remove('text-light');
        } else {
            cityArea.classList.add('text-dark');
        }

    } else {
        console.log('Night');
        timeImage.setAttribute('src', 'img/bg/midnight.jpg');
        if (cityArea.classList.contains('text-dark')) {
            cityArea.classList.remove('text-dark');
        } else {        
            cityArea.classList.add('text-light');
        }
    }

    cardInfo.classList.remove('d-none');

}


// add an event listener to the form

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    citySearched = cityValue.value.trim();
    console.log(citySearched);

    searchForm.reset();

    requestCity(citySearched)
        .then((data) => { 
            updateMyWeather(data);
         })
         .catch((error) => ( console.log(error) ))

})
