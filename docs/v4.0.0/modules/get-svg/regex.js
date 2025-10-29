export default class {
  async getSVGRegEx(_event, el) {
    const url = "/v4.0.0/payloads/get-svg/regex.svg";
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getSVG(
      url, subs
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}

