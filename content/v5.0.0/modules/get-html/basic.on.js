export default class {
  async getHTMLBasic(_event, el) {
    const response = await this.api.getHTML(
      "/[@ json.version.version_dir @]/payloads/get-html/basic.html"
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}