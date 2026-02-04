export default class {
  async getHTMLBasic(_event, el) {
    const response = await this.api.getHTML(
      "/[@ version_dir @]/payloads/get-html/basic.html"
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}