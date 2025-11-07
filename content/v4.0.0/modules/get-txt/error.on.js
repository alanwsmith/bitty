export default class {
  async getTXTError(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-txt/intentionally-missing-file.txt";
    const response = await this.api.getTXT(url);
    if (response.ok) {
      el.innerHTML = response.ok;
    } else {
      el.innerHTML = response.error;
    }
  }
}
