const temperatureField = document.querySelector('.temp');
const locationField = document.querySelector('.time_location');
const dateandtimeField = document.querySelector('.time_location');
const conditionField = document.querySelector('.condition');
const searchField = document.querySelector('.search_area');
const form = document.querySelector('.search_button');
const cityField = document.querySelector('.city_name');

form.addEventListener('submit', searchForLocation);

let target = 'Mumbai';

const fetchResult = async (targetLocation) => {
    let url = `http://api.weatherapi.com/v1/current.json?key=95f2f5703bf04f4e876154722240806&q=${targetLocation}&aqi=no`;
    const res = await fetch(url);
    const data = await res.json();   
    console.log(data);

    let locationName = data.location.name;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition.text;
    updateDetails(temp, locationName, time, condition);
    updateCityName(targetLocation);
};

function searchForLocation(e) {
    e.preventDefault();
    target = searchField.value;
    fetchResult(target);
}

function updateDetails(temp, locationName, time, condition) {
    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandtimeField.innerText = time;
    conditionField.innerText = condition;
}

function updateCityName(cityName) {
    cityField.innerText = `Weather in ${cityName}`; 
}

fetchResult(target);
