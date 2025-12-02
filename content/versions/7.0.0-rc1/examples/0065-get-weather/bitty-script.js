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
  stationOption: `<option value="STATION">STATION - CITY, STATE</option>`,
  report: `<div>
<div>DESC<br />TEMPF°F (TEMPC°C)</div>
<div><img src="IMG" /></div>
</div>
`,
};

function c2f(c) {
  return Math.round((c * 9 / 5) + 32);
}

window.GetWeather = class {
  #stations = null;

  async bittyInit() {
    const url =
      `/versions/[@ page_config.version @]/examples/[@ page_config.parent_folder @]/stations.json`;
    const response = await this.api.getJSON(url);
    if (response.value) {
      this.#stations = response.value;
    }
    this.api.trigger("changeStation");
  }

  async changeStation(ev, el) {
    el.innerHTML = "...";
    let stationId = ev.val;
    if (stationId === undefined) {
      stationId = Object.keys(this.#stations)[0];
    }
    const url =
      `https://api.weather.gov/stations/${stationId}/observations/latest`;
    const response = await this.api.getJSON(url);
    if (response.value) {
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
    }
  }

  weatherStations(_, el) {
    const selector = this.api.makeElement(weatherTemplates.selector);
    Object.keys(this.#stations).forEach((station) => {
      const subs = [
        ["STATION", station],
        ["CITY", this.#stations[station].city],
        ["STATE", this.#stations[station].state],
      ];
      const option = this.api.makeElement(weatherTemplates.stationOption, subs);
      selector.appendChild(option);
    });
    el.appendChild(selector);
  }
};
