export default class {
  bittyInit() {
    this.api.trigger("runTest0395");
  }

  async runTest0395(_event, el) {
    const url =
      "/v6.0.0/tests/0395-get-json-with-subs/payload.json";
    const subs = [
      [/FAILED/g, "PASSED"],
    ];
    const response = await this.api.getJSON(url, subs);
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}