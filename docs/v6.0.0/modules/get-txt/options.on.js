export default class {
  async getTXTOptions(_event, el) {
    const url = "/v6.0.0/payloads/get-txt/options.txt";
    const subs = [];
    const options = {
      method: "GET",
    };
    const response = await this.api.getTXT(
      url, subs, options
    );
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}