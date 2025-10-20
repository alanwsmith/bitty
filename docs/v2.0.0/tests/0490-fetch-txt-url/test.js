export default class {
  async runTest0490(_event, el) {
    const url = "/v2.0.0/tests/0490-fetch-txt-url/payload.txt";
    const subs = [[/FAILED/g, "PASSED"]];
    const options = {};
    const response = await this.api.getTXT(url, subs, options);
    el.innerHTML = response.trim();
  }
}