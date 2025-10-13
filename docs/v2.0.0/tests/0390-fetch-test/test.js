export default class {
  async runTest0390(_event, el) {
    const url = "https://api.weather.gov/gridpoints/DTX/34,36/forecast";
    const data = await this.api.fetchJson(url);
    if (data.type === "Feature") {
      el.innerHTML = "PASSED";
    }
  }
}