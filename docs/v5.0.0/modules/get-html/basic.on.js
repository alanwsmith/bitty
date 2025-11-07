export default class {
  async getHTMLBasic(_event, el) {
    const response = await this.api.getHTML(
      "/v5.0.0/payloads/get-html/basic.html"
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}