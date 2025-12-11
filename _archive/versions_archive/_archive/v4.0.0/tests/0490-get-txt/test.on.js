export default class {
  async runTest0490(_event, el) {
    const url = "/[@ json.version.version_dir @]/tests/0490-get-txt/payload.txt";
    const response = await this.api.getTXT(url);
    el.innerHTML = response.ok;
  }
}

