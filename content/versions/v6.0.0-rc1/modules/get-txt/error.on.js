export default class {
  async getTXTError(_event, el) {
    const url = "/[@ version_dir @]/payloads/get-txt/intentionally-missing-file.txt";
    const response = await this.api.getTXT(url);
    if (response.value) {
      el.innerHTML = response.value;
    } else {
      el.innerHTML = response.error;
    }
  }
}
