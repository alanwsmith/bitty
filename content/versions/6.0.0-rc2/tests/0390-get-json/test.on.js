export default class {
  bittyInit() {
    this.api.trigger("runTest0390");
  }

  async runTest0390(_event, el) {
    const url =
      "/[@ version_dir @]/tests/0390-get-json/payload.json";
    const response = await this.api.getJSON(url);
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}
