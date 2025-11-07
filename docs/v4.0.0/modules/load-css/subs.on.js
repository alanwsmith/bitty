export default class {
  async loadCSSSubs(_event, el) {
    const url = "/v5.0.0/payloads/load-css/subs.css";
    const subs = [
      ["COLOR_NAME", "red"]
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