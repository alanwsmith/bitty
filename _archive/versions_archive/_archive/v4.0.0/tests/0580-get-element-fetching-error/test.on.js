export default class {
  async runTest0580(_event, el) {
    const url =
      `/[@ json.version.version_dir @]/tests/0580-get-element-fetching-error/intentionally-missing-file.html`;
    const response = await this.api.getElement(url);
    if (response.error.status === 404) {
      el.innerHTML = "PASSED";
    }
  }
}

