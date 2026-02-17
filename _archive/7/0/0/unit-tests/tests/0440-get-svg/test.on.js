export default class {
  bittyInit() {
    this.api.trigger("runTest0440");
  }
  async runTest0440(_event, el) {
    const url = "/[@ file.folder @]/payload.svg";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getSVG(url, subs);
    el.parentNode.replaceChildren(response.value);
  }
}
