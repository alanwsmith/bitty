export default class {
  async getTXTBasic(_event, el) {
    const url = "/v5.0.0/payloads/get-txt/basic.txt";
    const response = await this.api.getTXT(url);
    if (response.ok) {
      el.innerHTML = response.ok;
    } else {
      el.innerHTML = response.error;
    }
  }
}