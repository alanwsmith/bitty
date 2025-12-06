export default class {
  async loadCSSRegEx(_event, el) {
    const url = "/[@ version_dir @]/payloads/load-css/regex.css";
    const subs = [
      [/COLOR_NAME/g, "red"],
    ];
    const response = await this.api.loadCSS(
      url, subs
    );
    if (response.value) {
      el.innerHTML = "CSS Loaded";
    } else {
      el.innerHTML = response.error;
    }
  }
}

