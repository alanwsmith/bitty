export default class {
  async getErrorJSON(_event, el) {
    const url =  "/[@ version_dir @]/payloads/get-json/intentionally-missing-file.on.json";
    const response = await this.api.getJSON(
      url
    );
    if (response.value) {
      el.innerHTML = response.value.text;
    } else {
      el.innerHTML = response.error;
    }
  }
}