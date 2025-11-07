export default class {
  async runTest0493(_event, el) {
    const url = "/v4.0.0/tests/0493-get-txt-subs/payload.txt";
    const subs = [[/FAILED/g, "PASSED"]];
    const options = {};
    const response = await this.api.getTXT(url, subs, options);
    if (response.ok) {
      el.innerHTML = response.ok;
    }
  }
}