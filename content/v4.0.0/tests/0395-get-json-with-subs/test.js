export default class {
  async runTest0395(_event, el) {
    const url = "/v4.0.0/tests/0395-get-json-with-subs/payload.json";
    const subs = [
      [/FAILED/g, "PASSED"],
    ];
    const response = await this.api.getJSON(url, subs);
    if (response.ok) {
      el.innerHTML = response.ok.status;
    }
  }
}
