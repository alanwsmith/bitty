/*
[!- set page_config = namespace() !]

[!- if file.folder_parts[1] !]
[!- set page_config.version = file.folder_parts[1] !]
[!- else !]
[!- set page_config.version = current_version !]
[!- endif !]

[!- if file.parent_folder !]
[!- set page_config.parent_folder = file.parent_folder !]
[!- else !]
[!- set page_config.parent_folder = folder.name !]
[!- endif !]
*/

const weatherTemplates = {
  selector: `<select data-send="changeStation"></select>`,

  stationOption: `<option value="URL">CITY, STATE</option>`,

  report: `<div>
<div>DESC<br />TEMPF°F (TEMPC°C)</div>
<div><img src="IMG" /></div>
</div>`,
};

function c2f(c) {
  return Math.round((c * 9 / 5) + 32);
}

window.GetWeather = class {
  #stations = null;

  async bittyInit() {
    const url =
      `/versions/[@ major_dir @]/[@ minor_dir @]/[@ patch_dir @]/examples/[@ page_config.parent_folder @]/stations.json`;
    const response = await this.api.getJSON(url);
    if (response.value) {
      this.#stations = response.value;
    }
    this.api.trigger("changeStation");
  }

  async changeStation(ev, el) {
    el.innerHTML = "...";
    const station = ev.val === undefined ? "PAJN" : ev.val;
    const url =
      `https://api.weather.gov/stations/${station}/observations/latest`;
    const response = await this.api.getJSON(url);

    const data = response.value.properties;
    const tmpC = data.temperature.value;
    const tmpF = c2f(tmpC);
    const subs = [
      ["TEMPC", tmpC],
      ["TEMPF", tmpF],
      ["DESC", data.textDescription],
      ["IMG", data.icon],
    ];
    const output = this.api.makeHTML(weatherTemplates.report, subs);
    el.replaceChildren(output);

    //
  }

  weatherStations(_, el) {
    const selector = this.api.makeElement(weatherTemplates.selector);
    Object.values(this.#stations.capitals).forEach((station) => {
      const subs = [
        ["CITY", station.city_name],
        ["STATE", station.state_name],
        ["URL", station.weather_station_id],
      ];
      const option = this.api.makeElement(weatherTemplates.stationOption, subs);
      selector.appendChild(option);
    });
    el.appendChild(selector);
  }
};
