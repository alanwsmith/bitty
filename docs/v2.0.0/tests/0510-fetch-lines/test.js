export default class {
  async runTest0510(_event, el) {
    const url = "/v2.0.0/tests/0510-fetch-lines/lines.txt";
    const response = await this.api.fetchLines(url);
    el.innerHTML = response[1];
  }
}