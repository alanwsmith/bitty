export default class {
  async getElementRegex(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-element/regex.html";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getElement(
      url, subs
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}

