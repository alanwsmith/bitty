export default class {
  bittyInit() {
    this.api.trigger("runTest0490");
  }
  async runTest0490(_event, el) {
    const url =
      "//tests/0490-get-txt/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.value;
  }
}