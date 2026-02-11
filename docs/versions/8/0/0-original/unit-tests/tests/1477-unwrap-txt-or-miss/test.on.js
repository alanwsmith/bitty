export default class {
  bittyInit() {
    // TODO: Move this to a page where 404s
    // aren't distracting in the console
    //  this.api.trigger("runTest1477");
  }

  async runTest1477(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/1477-unwrap-txt-or-miss/payload.txt";
    const response = await this.api.getTEXT(url);
    el.innerHTML = response.unwrapOr("PASSED");
  }
}