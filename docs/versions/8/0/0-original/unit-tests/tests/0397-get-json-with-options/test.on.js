export default class {
  bittyReady() {
    this.api.localTrigger("runTest0397");
  }

  async runTest0397(_event, el) {
    const url = "https://echo.hoppscotch.io/";
    const subs = [];
    const options = { method: "POST" };
    const response = await this.api.getJSON(url, subs, options);
    if (response.value && response.value.method === "POST") {
      el.innerHTML = "PASSED";
    }
  }
}