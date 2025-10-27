export default class {
  async loadCSSRegEx(_event, el) {
    const url = "/v3.0.0/payloads/load-css/regex.css";
    const subs = [
      [/COLOR_NAME/g, "red"],
    ];
    const response = await this.api.loadCSS(
      url, subs
    );
    if (response.ok) {
      el.innerHTML = "CSS Loaded";
    } else {
      el.innerHTML = response.error;
    }
  }
}
