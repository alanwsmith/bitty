export default class {
  bittyInit() {
    this.api.trigger("runTest0590");
  }
  async runTest0590(_event, el) {
    const url = "/versions/7.0.0-rc1/tests/0590-load-css/payload.css";
    const response = await this.api.loadCSS(url);
    const styles = getComputedStyle(document.documentElement);
    const checkValue = styles.getPropertyValue("--test-0590-value");
    if (checkValue === "green") {
      el.innerHTML = "PASSED";
    }
  }
}