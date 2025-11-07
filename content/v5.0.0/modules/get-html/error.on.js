export default class {
  async getHTMLError(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-html/intentionally-missing-file.html";
    const response = await this.api.getHTML(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}
