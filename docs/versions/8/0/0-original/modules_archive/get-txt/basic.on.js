export default class {
  async getTEXTBasic(_event, el) {
    const url = "//payloads/get-txt/basic.txt";
    const response = await this.api.getTEXT(url);
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}