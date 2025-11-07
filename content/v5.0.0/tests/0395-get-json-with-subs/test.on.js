export default class {
  async runTest0395(_event, el) {
    const url = "/[@ json.version.version_dir @]/tests/0395-get-json-with-subs/payload.json";
    const subs = [
      [/FAILED/g, "PASSED"],
    ];
    const response = await this.api.getJSON(url, subs);
    if (response.value) {
      el.innerHTML = response.value.status;
    }
  }
}
