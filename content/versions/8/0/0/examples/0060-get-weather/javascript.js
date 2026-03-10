export const bitty = {};

let current_station;
let stations;

function c2f(c) {
  return Math.round((c * 9 / 5) + 32);
}

export function changeStation(ev, __, ___) {
  current_station = ev.val;
  bitty.trigger("weather");
}

export async function loadStations(_, __, el) {
  stations = await bitty.fetch(
    "/versions/8/0/0/examples/0060-get-weather/stations.json",
  );
  if (stations !== undefined) {
    el.replaceWith(bitty.render(
      bitty.template["select"],
      { "OPTIONS": options() },
    ));
    bitty.trigger("weather");
  } else {
    el.innerHTML = "Could not get station list.";
  }
}

export async function weather(_, __, el) {
  const report = await bitty.fetch(
    `https://api.weather.gov/stations/${current_station}/observations/latest`,
  );
  if (report !== undefined) {
    const tmpC = report.properties.temperature.value;
    const tmpF = c2f(report.properties.temperature.value);
    console.log(report.properties.icon);
    el.replaceChildren(
      bitty.render(bitty.template["weather"], {
        "DESCRIPTION": report.properties.textDescription,
        "TEMP": `${tmpF}°F (${tmpC}°C)`,
        "IMG_SRC": report.properties.icon,
      }),
    );
  } else {
    el.innerHTML = "Could not get weather report.";
  }
}

function options() {
  return Object.keys(stations)
    .map((state, index) => {
      const item = stations[state];
      if (index === 0) {
        current_station = item.weather_station_id;
      }
      return bitty.render(
        bitty.template["option"],
        {
          "ABBREVIATION": state,
          "CITY": item.city_name,
          "CODE": item.weather_station_id,
          "STATE": item.state_name,
        },
      );
    });
}
