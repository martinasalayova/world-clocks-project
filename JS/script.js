function updateTime() {
  let parisSectionElement = document.querySelector("#paris");
  let formatParisDate = moment().tz("Europe/Paris");
  let parisDateElement = parisSectionElement.querySelector("#paris-date");
  let parisTimeElement = parisSectionElement.querySelector("#paris-time");
  parisDateElement.innerHTML = formatParisDate.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = formatParisDate.format("HH:mm:ss A");

  let tokyoSectionElement = document.querySelector("#tokyo");
  let formatTokyoDate = moment().tz("Asia/Tokyo");
  let tokyoDateElement = tokyoSectionElement.querySelector("#tokyo-date");
  let tokyoTimeElement = tokyoSectionElement.querySelector("#tokyo-time");
  tokyoDateElement.innerHTML = formatTokyoDate.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = formatTokyoDate.format("HH:mm:ss A");

  let losAngelesSectionElement = document.querySelector("#los-angeles");
  let formatLosAngelesDate = moment().tz("America/Los_Angeles");
  let losAngelesDateElement =
    losAngelesSectionElement.querySelector("#los-angeles-date");
  let losAngelesTimeElement =
    losAngelesSectionElement.querySelector("#los-angeles-time");
  losAngelesDateElement.innerHTML = formatLosAngelesDate.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = formatLosAngelesDate.format("HH:mm:ss A");
}

updateTime();
setInterval(updateTime, 1000);
