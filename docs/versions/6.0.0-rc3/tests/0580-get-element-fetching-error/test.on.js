export default class {
  bittyReady() {
    this.api.localTrigger("runTest0580");
  }

  async runTest0580(_event, el) {
    const url =
      `/versions/6.0.0-rc3/tests/0580-get-element-fetching-error/intentionally-missing-file.html`;
    const response = await this.api.getElement(url);
    if (response.error.status === 404) {
      el.innerHTML = "PASSED";
    }
  }
}