export default class {
  bittyInit() {
    this.api.trigger("runTest1475");
  }
  async runTest1475(_event, el) {
    const url = "/[@ file.folder @]/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.unwrapOr("FAILED");
  }
}
