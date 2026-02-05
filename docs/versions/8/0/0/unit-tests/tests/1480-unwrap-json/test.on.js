export default class {
  async runTest1480(_, el) {
    const url = "/versions/8/0/0/unit-tests/tests/1480-unwrap-json/payload.json";
    const result = await this.api.getJSON(url);
    el.innerHTML = result.unwrap().testKey;
  }
}