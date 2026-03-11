export default class {
  bittyInit() {
    this.api.trigger("runTest0395");
  }

  async runTest0395(_event, el) {
    const url = "/[@ file.folder @]/payload.json";
    const subs = [
      [/FAILED/g, "PASSED"],
    ];
    const response = await this.api.getJSON(url, subs);
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}
