export default class {
  async loadCSSBasic(_event, el) {
    const url = "/v4.0.0/payloads/load-css/basic.css";
    const response = await this.api.loadCSS(url);
    if (response.ok) {
      el.innerHTML = "CSS Loaded";
    } else {
      el.innerHTML = response.error;
    }
  }
}