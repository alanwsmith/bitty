export default class {
  async getTXTBasic(_event, el) {
    const url = "/v6.0.0/payloads/get-txt/basic.txt";
    const response = await this.api.getTXT(url);
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}