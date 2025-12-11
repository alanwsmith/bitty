export default class {
  async getSVGOptions(_event, el) {
    const url = "/[@ version_dir @]/payloads/get-svg/options.svg";
    const subs = [];
    const options = {
      method: "GET",
    };
    const response = await this.api.getSVG(
      url, subs, options
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}