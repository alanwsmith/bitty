export default class {
  async getUndefinedHTML(_event, el) {
    const html = await this.api.getHTML(
      "/v2.0.0/payloads/get-html/intentionally-missing-file.html"
    );
    el.innerHTML = html;
  }
}