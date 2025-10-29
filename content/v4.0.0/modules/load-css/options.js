export default class {
  async loadCSSOptions(_event, el) {
    const url = "/v4.0.0/payloads/load-css/options.css";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.loadCSS(
      url, subs, options
    );
    if (response.ok) {
      el.innerHTML = "CSS Loaded";
    } else {
      el.innerHTML = response.error;
    }
  }
}

