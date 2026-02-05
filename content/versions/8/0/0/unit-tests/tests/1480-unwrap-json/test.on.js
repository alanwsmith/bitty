export default class {
  async runTest1480(_, el) {
    const url = "/[@ file.folder @]/payload.json";
    const result = await this.api.getJSON(url);
    el.innerHTML = result.unwrap().testKey;
  }
}
