export default class {
  bittyInit() {
    this.api.trigger("runTest0493");
  }
  async runTest0493(_event, el) {
    const url = "/[@ file.folder @]/payload.txt";
    const subs = [[/FAILED/g, "PASSED"]];
    const options = {};
    const response = await this.api.getTXT(url, subs, options);
    if (response.value) {
      el.innerHTML = response.value;
    }
  }
}
