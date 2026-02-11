export default class {
  async getTEXTOptions(_event, el) {
    const url = "//payloads/get-txt/options.txt";
    const subs = [];
    const options = {
      method: "GET",
    };
    const response = await this.api.getTEXT(
      url, subs, options
    );
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}