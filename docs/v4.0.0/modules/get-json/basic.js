export default class {
  async getBasicJSON(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-json/basic.json";
    const response = await this.api.getJSON(
      url
    );
    if (response.ok) {
      el.innerHTML = response.ok.text;
    } else {
      el.innerHTML = response.error;
    }
  }
}