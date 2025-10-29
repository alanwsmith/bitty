export default class {
  async runTest0390(_event, el) {
    const url = "/[@ version_dir @]/tests/0390-get-json/payload.json";
    const response = await this.api.getJSON(url);
    if (response.ok) {
      el.innerHTML = response.ok.status;
    }
  }
}
