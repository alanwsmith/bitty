export const bitty = {};

let current_station;
let stations;

export function changeStation(ev, __, ___) {
  console.log(ev);
}

export async function loadStations(_, __, el) {
  stations = await bitty.fetch(
    "/versions/8/0/0/examples/0060-get-weather/stations.json",
  );
  if (stations !== undefined) {
    const subs = {
      "OPTIONS": options(),
    };
    const select = bitty.render(
      bitty.template["select"],
      subs,
    );
    el.replaceWith(select);
    bitty.trigger("weather");
  }
}

export async function weather(_, __, el) {
  el.replaceChildren(
    bitty.render(bitty.template["weather"]),
  );
}

function options() {
  return Object.keys(stations)
    .map((state, index) => {
      if (index === 0) {
        current_station = stations[state].weather_station_id;
      }
      const subs = {
        "ABBREVIATION": state,
        "CITY": stations[state].city_name,
        "STATE": stations[state].state_name,
      };
      return bitty.render(
        bitty.template["option"],
        subs,
      );
    });
}
