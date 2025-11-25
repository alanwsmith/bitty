export default class {
  async getJSONOptions(_event, el) {
    const url = "/[@ version_dir @]/payloads/get-json/options.on.json";
    const subs = [];
    const options = {
      method: "GET",
    };
    const response = await this.api.getJSON(
      url, subs, options
    );
    if (response.value) {
      el.replaceChildren(response.value.text);
    } else {
      el.innerHTML = response.error;
    }
  }
}
