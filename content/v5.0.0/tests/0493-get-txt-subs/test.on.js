export default class {
  async runTest0493(_event, el) {
    const url = "/[@ json.version.version_dir @]/tests/0493-get-txt-subs/payload.txt";
    const subs = [[/FAILED/g, "PASSED"]];
    const options = {};
    const response = await this.api.getTXT(url, subs, options);
    if (response.value) {
      el.innerHTML = response.value;
    }
  }
}

