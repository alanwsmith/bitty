export default class {
  bittyInit() {
    this.api.trigger("runTest0490");
  }
  async runTest0490(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/0490-get-text/payload.txt";
    const response = await this.api.getTEXT(url);
    el.innerHTML = response.value;
  }
}