export default class {
  async getSVGBasic(_event, el) {
    const url = "//payloads/get-svg/basic.svg";
    const response = await this.api.getSVG(url);
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}