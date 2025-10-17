export default class {
  async runTest0450(_event, el) {
    const subs = [[/FAILED/g, "PASSED"]];
    const styles = await this.api.addCSS(
      `/v2.0.0/tests/0450-add-css/payload.css`,
      subs,
    );
    if (styles.cssRules[0].selectorText === ".PASSED") {
      el.innerHTML = "PASSED";
    }
  }
}