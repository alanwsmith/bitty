export default class {
  bittyInit() {
    this.api.trigger("runTest0490");
  }
  async runTest0490(_event, el) {
    const url = "/[@ file.folder @]/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.value;
  }
}
