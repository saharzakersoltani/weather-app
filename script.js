'use strict';

// Weather App
const input = document.querySelector('.input');
const btnSearch = document.querySelector('.btn__search');
const article = document.querySelector('article');
const apiKey = '3366667e3901a854740f2c0b55f891cc';

// sky images
// const skyImgs = function (data) {
//   const weatherId = data.weather[0].id;
//   // if (200 <= weatherId && weatherId <= 232) {
//   //   return 'https://openweathermap.org/img/wn/10d@2x.png';
//   // }
//   if (weatherId === 803) {
//     return 'sky-images/02d@2x.png';
//   }
// };

// render data
const renderData = function (data) {
  const html = `
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
  article.insertAdjacentHTML('afterbegin', html);
};

// event listener
btnSearch.addEventListener('click', function (e) {
  e.preventDefault();
  if (input.value === '') alert('fill the inpute!');
  else {
    // fetch API
    const getData = async function (location) {
      try {
        const fetchData = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
        );
        if (!fetchData.ok)
          throw new Error(`Can not fetch data! (${fetchData.status})`);
        const getJSON = await fetchData.json();
        console.log(getJSON);
        renderData(getJSON);
      } catch (err) {
        console.error(`${err.message}`);
      }
    };
    getData(input.value);
  }
});
