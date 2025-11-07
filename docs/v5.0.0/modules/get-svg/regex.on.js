export default class {
  async getSVGRegEx(_event, el) {
    const url = "/v5.0.0/payloads/get-svg/regex.svg";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getSVG(
      url, subs
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}