export default class {
  async runTest0397(_event, el) {
    const url = "https://echo.hoppscotch.io/";
    const subs = [];
    const options = { method: "POST" };
    const response = await this.api.fetchJSON(url, subs, options);
    if (response.method === "POST") {
      el.innerHTML = "PASSED";
    }
  }
}