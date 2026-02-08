export default class {
  bittyInit() {
    this.api.trigger("runTest1475");
  }
  async runTest1475(_event, el) {
    const url = "/versions/8/0/0/unit-tests/tests/1475-unwrap-txt-or-hit/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.unwrapOr("FAILED");
  }
}