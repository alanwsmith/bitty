export default class {
  async runTest0450(_event, el) {
    const subs = [[/FAILED/g, "PASSED"]];
    const styles = await this.api.loadCSS(
      `/v2.0.0/tests/0450-fetch-css/payload.css`,
      subs,
    );
    if (styles.cssRules[0].selectorText === ".PASSED") {
      el.innerHTML = "PASSED";
    }
  }
}