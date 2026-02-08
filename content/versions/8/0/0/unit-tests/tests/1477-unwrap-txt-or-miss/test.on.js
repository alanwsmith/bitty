export default class {
  bittyInit() {
    this.api.trigger("runTest1477");
  }
  async runTest1477(_event, el) {
    const url = "/[@ file.folder @]/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.unwrapOr("PASSED");
  }
}
