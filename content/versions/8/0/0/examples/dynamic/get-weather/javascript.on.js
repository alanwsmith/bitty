export const b = { init: "loadStations" };

let current_station;
let stations;
const stationsURL = `/[@ [file.parent, "stations.json"]|join("/") @]`;

export function changeStation(ev, __, ___) {
  current_station = ev.val;
  b.trigger("weather");
}

export async function loadStations(_, __, el) {
  stations = await b.get(stationsURL);
  if (stations) {
    el.replaceChildren(...options());
    b.trigger("weather");
  } else {
    b.trigger("weatherError");
  }
}

function options() {
  return Object.keys(stations)
    .map((state, index) => {
      if (index === 0) {
        current_station = stationId(state);
      }
      const subs = {
        __ABBREVIATION__: state,
        __CITY__: cityName(state),
        __CODE__: stationId(state),
        __STATE__: stateName(state),
      };
      return b.render("option", subs);
    });
}

export async function weather(_, __, el) {
  el.innerHTML = "Loading weather report...";
  const report = await b.get(reportURL());
  if (report === undefined || weatherIcon(report) === null) {
    el.innerHTML =
      `Weather currently unavailable for station ${current_station}`;
    return;
  }
  const subs = {
    __DESCRIPTION__: weatherDescription(report),
    __IMG_SRC__: weatherIcon(report),
    __TEMP__: tempString(report),
  };
  el.replaceChildren(b.render("weather", subs));
}

export function weatherError(_, __, el) {
  el.innerHTML = "Error: could not get weather data";
}

// Helpers

function cityName(state) {
  return stations[state].city_name;
}

function reportURL() {
  return `https://api.weather.gov/stations/${current_station}/observations/latest`;
}

function stationId(state) {
  return stations[state].weather_station_id;
}

function stateName(state) {
  return stations[state].state_name;
}

function tempC(report) {
  return report.properties.temperature.value;
}

function tempF(report) {
  return Math.round((report.properties.temperature.value * 9 / 5) + 32);
}

function tempString(report) {
  return `${tempF(report)}°F (${tempC(report)}°C)`;
}

function weatherDescription(report) {
  return report.properties.textDescription;
}

function weatherIcon(report) {
  return report.properties.icon;
}
