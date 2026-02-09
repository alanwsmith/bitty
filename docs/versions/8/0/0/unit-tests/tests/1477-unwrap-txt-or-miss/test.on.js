export default class {
  bittyInit() {
    this.api.trigger("runTest1477");
  }
  async runTest1477(_event, el) {
    const url = "/versions/8/0/0/unit-tests/tests/1477-unwrap-txt-or-miss/payload.txt";
    const response = await this.api.getTEXT(url);
    el.innerHTML = response.unwrapOr("PASSED");
  }
}