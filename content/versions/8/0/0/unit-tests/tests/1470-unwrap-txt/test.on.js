export default class {
  async runTest1470(_, el) {
    const url = "/[@ file.folder @]/payload.txt";
    const result = await this.api.getTXT(url);
    el.innerHTML = result.unwrap();
  }
}
