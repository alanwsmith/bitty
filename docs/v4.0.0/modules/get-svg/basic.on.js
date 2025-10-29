export default class {
  async getSVGBasic(_event, el) {
    const url = "/v4.0.0/payloads/get-svg/basic.svg";
    const response = await this.api.getSVG(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}