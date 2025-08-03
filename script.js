'use strict';

//====================== Weather App ===========================
const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn__search');
const article = document.querySelector('article');
const weatherContainer = document.querySelector('.container');
const apiKey = '3366667e3901a854740f2c0b55f891cc';

//======================= render data =========================
const renderData = function (data) {
  // Remove old article if exists
  const oldArticle = document.querySelector('article');
  if (oldArticle) oldArticle.remove();
  // Create new article
  const article = document.createElement('article');
  article.innerHTML = `
    <article>
        <div class="sky__img">
          <img src='https://openweathermap.org/img/wn/${
            data.weather[0].icon
          }@2x.png' />
        </div>

        <div>
          <h4 class="city__temperature">${Math.round(data.main.temp)}&deg;C</h4>
          <h3 class="location">${data.name}, ${data.sys.country} </h3>
          <!-- <h4 class="city__calender__hour">2025-07-27 16:38</h4> -->
          <p class="sky__like">${data.weather[0].description}</p>

          <div class="climator__flex">
          
            <div class='climator'>
              <img class='climator__icon' src='sky-images/humidity.png' alt='humidity weather' />
               <div class="f">
                   <p class="humidity">${data.main.humidity}%</p>
                   <p class="style">Humidity</p>
               </div>
            </div>

            <div class='climator'>
              <img class='climator__icon' src='sky-images/windy.png' alt=windy weather' />
                <div class="f">
                   <p class="wind">${data.wind.speed} m/s</p>
                    <p class="style">Wind Speed</p>
                </div>
             </div>
              
          </div>
        </div>
        
      </article>
    `;
  weatherContainer.appendChild(article);
};

//================== fetch data ===================
const fetchData = function (value) {
  const getData = async function (location) {
    try {
      const fetchData = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
      );
      if (!fetchData.ok) {
        console.log(fetchData);
        throw new Error(`Can not fetch data! (${fetchData.status})`);
      }
      const getJSON = await fetchData.json();
      renderData(getJSON);
    } catch (err) {
      console.error(`${err.message}`);
      alert(`Please try again.`);
    }
  };
  getData(input.value);
};

///////////////////////////////////////////////
//=================== main function ===================
const mainFunction = function () {
  if (input.value === '') alert('fill the inpute!');
  else {
    fetchData(input.value);
    input.value = '';
    input.placeholder = 'search here';
  }
};

//================== event listener by click =====================
btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  mainFunction();
});

//================== event listener by button ====================
input.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Enter') mainFunction();
});

//Check if the window is offline
// const imgDinosaur = document.querySelector('.img__dinosaur');

window.addEventListener('offline', function () {
  const body = document.querySelector('body');
  document.querySelector('body').style.backgroundImage = 'none';
  weatherContainer.style.display = 'none';

  const offlineHtml = `
  <div class="offline__mode">
      <h1>No internet</h1>
      <h4>Try:</h4>
      <ul>
        <li>Checking the network cables, modem, and router</li>
        <li>Reconnecting to Wi-Fi</li>
        <li>Running Windows Network Diagnostics</li>
      </ul>
  </div>  
      `;
  body.insertAdjacentHTML('beforeend', offlineHtml);
});
