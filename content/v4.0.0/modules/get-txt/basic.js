export default class {
  async getTXTBasic(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-txt/basic.txt";
    const response = await this.api.getTXT(url);
    if (response.ok) {
      el.innerHTML = response.ok;
    } else {
      el.innerHTML = response.error;
    }
  }
}
