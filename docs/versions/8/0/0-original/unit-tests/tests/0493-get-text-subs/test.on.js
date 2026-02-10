export default class {
  bittyInit() {
    this.api.trigger("runTest0493");
  }
  async runTest0493(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/0493-get-text-subs/payload.txt";
    const subs = [[/FAILED/g, "PASSED"]];
    const options = {};
    const response = await this.api.getTEXT(url, subs, options);
    if (response.value) {
      el.innerHTML = response.value;
    }
  }
}