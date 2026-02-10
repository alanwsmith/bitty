export default class {
  async loadCSSError(_event, el) {
    const url = "//payloads/load-css/intentionall-missing-file.css";
    const response = await this.api.loadCSS(url);
    if (response.value) {
      el.innerHTML = "CSS Loaded";
    } else {
      el.innerHTML = response.error;
    }
  }
}