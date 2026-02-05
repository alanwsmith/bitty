export default class {
  async runTest1470(_, el) {
    const url = "/versions/8/0/0/unit-tests/tests/1470-unwrap-txt/payload.txt";
    const result = await this.api.getTXT(url);
    el.innerHTML = result.unwrap();
  }
}