export default class {
  bittyInit() {
    this.api.trigger("runTest0390");
  }

  async runTest0390(_event, el) {
    const url = "/[@ file.folder @]/payload.json";
    const response = await this.api.getJSON(url);
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}
