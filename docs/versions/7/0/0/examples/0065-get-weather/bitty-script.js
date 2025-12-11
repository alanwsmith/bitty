const weatherTemplates = {
  selector: `<select data-send="changeStation"></select>`,

  stationOption: `<option value="URL">CODE - STATE (CITY)</option>`,

  report: `<div>
<div>DESC<br />TEMPF°F (TEMPC°C)</div>
<div>IMG</div>
</div>`,
};

function c2f(c) {
  return Math.round((c * 9 / 5) + 32);
}

window.GetWeather = class {
  #stations = null;

  async bittyInit() {
    const url = `/[@ version_dir @]/data/weather-stations.json`;
    const response = await this.api.getJSON(url);
    if (response.value) {
      this.#stations = response.value;
      this.api.trigger("changeStation");
    }
  }

  async changeStation(ev, el) {
    el.innerHTML = "...";
    const station = ev.value === undefined ? "PAJN" : ev.value;
    const url =
      `https://api.weather.gov/stations/${station}/observations/latest`;
    const response = await this.api.getJSON(url);
    if (response.value) {
      const data = response.value.properties;
      const tmpC = data.temperature.value;
      const tmpF = c2f(tmpC);
      const subs = [
        ["TEMPC", tmpC],
        ["TEMPF", tmpF],
        ["DESC", data.textDescription],
      ];
      if (data.icon) {
        subs.push(["IMG", `<img src="${data.icon}" alt="weather icon" />`]);
      } else {
        subs.push(["IMG", "(no image available)"]);
      }
      const output = this.api.makeHTML(weatherTemplates.report, subs);
      el.replaceChildren(output);
    } else {
      el.innerHTML = "Could not get feed";
    }
  }

  weatherStations(_, el) {
    const selector = this.api.makeElement(weatherTemplates.selector);
    Object.entries(this.#stations.capitals).forEach(([code, station]) => {
      const subs = [
        ["CITY", station.city_name],
        ["STATE", station.state_name],
        ["URL", station.weather_station_id],
        ["CODE", code],
      ];
      const option = this.api.makeElement(weatherTemplates.stationOption, subs);
      selector.appendChild(option);
    });
    el.appendChild(selector);
  }
};
