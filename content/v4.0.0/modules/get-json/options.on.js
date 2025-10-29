export default class {
  async getJSONOptions(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-json/options.on.json";
    const subs = [];
    const options = {
      method: "GET",
    };
    const response = await this.api.getJSON(
      url, subs, options
    );
    if (response.ok) {
      el.replaceChildren(response.ok.text);
    } else {
      el.innerHTML = response.error;
    }
  }
}
