export default class {
  async runTest0395(_event, el) {
    const url = "/v2.0.0/tests/0395-fetch-json-with-subs/payload.json";
    const subs = [
      [/FAILED/g, "PASSED"],
    ];
    const data = await this.api.getJSON(url, subs);
    el.innerHTML = data.status;
  }
}
