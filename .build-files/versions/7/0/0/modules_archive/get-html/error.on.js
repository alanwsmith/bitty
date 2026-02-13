export default class {
  async getHTMLError(_event, el) {
    const url = "//payloads/get-html/intentionally-missing-file.html";
    const response = await this.api.getHTML(url);
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}