export default class {
  async getRegExJSON(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-json/regex.on.json";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "atctic"]
    ];
    const response = await this.api.getJSON(
      url, subs
    );
    if (response.ok) {
      el.innerHTML = response.ok.text;
    } else {
      el.innerHTML = response.error;
    }
  }
}