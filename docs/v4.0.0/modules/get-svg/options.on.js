export default class {
  async getSVGOptions(_event, el) {
    const url = "/v5.0.0/payloads/get-svg/options.svg";
    const subs = [];
    const options = {
      method: "GET",
    };
    const response = await this.api.getSVG(
      url, subs, options
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}