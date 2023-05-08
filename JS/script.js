function updateTime() {
  let parisSectionElement = document.querySelector("#paris");
  if (parisSectionElement) {
    let formatParisDate = moment().tz("Europe/Paris");
    let parisDateElement = parisSectionElement.querySelector("#paris-date");
    let parisTimeElement = parisSectionElement.querySelector("#paris-time");
    parisDateElement.innerHTML = formatParisDate.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = formatParisDate.format("HH:mm:ss A");
  }

  let tokyoSectionElement = document.querySelector("#tokyo");
  if (tokyoSectionElement) {
    let formatTokyoDate = moment().tz("Asia/Tokyo");
    let tokyoDateElement = tokyoSectionElement.querySelector("#tokyo-date");
    let tokyoTimeElement = tokyoSectionElement.querySelector("#tokyo-time");
    tokyoDateElement.innerHTML = formatTokyoDate.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = formatTokyoDate.format("HH:mm:ss A");
  }

  let losAngelesSectionElement = document.querySelector("#los-angeles");
  if (losAngelesSectionElement) {
    let formatLosAngelesDate = moment().tz("America/Los_Angeles");
    let losAngelesDateElement =
      losAngelesSectionElement.querySelector("#los-angeles-date");
    let losAngelesTimeElement =
      losAngelesSectionElement.querySelector("#los-angeles-time");
    losAngelesDateElement.innerHTML =
      formatLosAngelesDate.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = formatLosAngelesDate.format("HH:mm:ss A");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
  <div>
          <h2>${cityName}</h2>

          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss A")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let selectedCity = document.querySelector("#selected-city");
selectedCity.addEventListener("change", updateCity);
