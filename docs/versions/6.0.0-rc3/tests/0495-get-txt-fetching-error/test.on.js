export default class {
  bittyReady() {
    this.api.localTrigger("runTest0495");
  }

  async runTest0495(_event, el) {
    const url = "/versions/6.0.0-rc3/tests/0495-get-txt-fetching-error/intentionally-missing-file.txt";
    const response = await this.api.getTXT(url);
    if (response.error.type === "fetching" 
          && response.error.message !== undefined
          && response.error.status === 404
) {
      el.innerHTML = "PASSED";
    }
  }
}