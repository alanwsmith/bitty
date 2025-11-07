export default class {
  async getTXTRegEx(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-txt/regex.txt";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "atctic"]
    ];
    const options = {};
    const response = await this.api.getTXT(
      url, subs, options
    );
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}
