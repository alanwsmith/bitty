export default class {
  async getTEXTError(_event, el) {
    const url = "//payloads/get-txt/intentionally-missing-file.txt";
    const response = await this.api.getTEXT(url);
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}