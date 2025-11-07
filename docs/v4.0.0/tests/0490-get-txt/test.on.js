export default class {
  async runTest0490(_event, el) {
    const url = "/v5.0.0/tests/0490-get-txt/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.ok;
  }
}