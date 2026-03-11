export const b = {
  init: "loadStations",
};

let current_station;
let stations;

export function changeStation(ev, __, ___) {
  current_station = ev.val;
  b.trigger("weather");
}

export async function loadStations(_, __, el) {
  stations = await b.fetchData(stationsURL());
  if (stations !== undefined) {
    options().forEach((option) => {
      el.appendChild(option);
    });
    b.trigger("weather");
  } else {
    el.replaceWith(b.render("<div>Error: could not get weather data</div>"));
  }
}

function options() {
  return Object.keys(stations)
    .map((state, index) => {
      if (index === 0) {
        current_station = stationId(state);
      }
      return b.render("option", {
        "ABBREVIATION": state,
        "CITY": cityName(state),
        "CODE": stationId(state),
        "STATE": stateName(state),
      }).firstChild;
    });
}

export async function weather(_, __, el) {
  const report = await b.fetchData(reportURL());
  if (report !== undefined) {
    el.replaceChildren(
      b.render("weather", {
        "DESCRIPTION": weatherDescription(report),
        "IMG_SRC": weatherIcon(report),
        "TEMP": tempString(report),
      }),
    );
  } else {
    el.innerHTML = `Could not get weather for ${current_station}`;
  }
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

function stationsURL() {
  return "/versions/8/0/0/examples/0060-get-weather/stations.json";
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
