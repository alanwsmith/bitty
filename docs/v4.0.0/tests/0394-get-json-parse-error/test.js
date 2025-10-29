export default class {
  async runTest0394(_event, el) {
    const url = "/[@ version_dir @]/tests/0394-get-json-parse-error/invalid-json.json";
    const response = await this.api.getJSON(url);
    if (response.error.type === "parsing") {
      el.innerHTML = "PASSED";
    }
  }
}