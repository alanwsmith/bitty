export default class {
  async getBasicHTML(_event, el) {
    const content = await this.api.getHTML(
      "/v2.0.0/payloads/get-html/basic/index.html"
    );
    el.replaceChildren(content);
  }
}