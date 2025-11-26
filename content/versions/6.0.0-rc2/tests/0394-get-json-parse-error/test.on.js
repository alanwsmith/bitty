[!- include "versions/6.0.0-rc2/vars.html" -!]

export default class {
  bittyInit() {
    this.api.trigger("runTest0394");
  }
  async runTest0394(_event, el) {
    const url =
      "/[@ version_dir @]/tests/0394-get-json-parse-error/invalid-json.json";
    const response = await this.api.getJSON(url);
    if (response.error.type === "parsing") {
      el.innerHTML = "PASSED";
    }
  }
}

