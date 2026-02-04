export default class {
  bittyInit() {
    this.api.trigger("runTest0440");
  }
  async runTest0440(_event, el) {
    const url = "/versions/8/0/0/unit-tests/tests/0440-get-svg/payload.svg";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getSVG(url, subs);
    el.parentNode.replaceChildren(response.value);
  }
}