export default class {
  async getHTMLBasic(_event, el) {
    const response = await this.api.getHTML(
      "/v5.0.0/payloads/get-html/basic.html"
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}