export default class {
  async runTest0410(_event, el) {
    const html = await this.api.getHTML(
      `/v3.0.0/tests/0410-fetch-html/payload/index.html`,
    );
    el.parentNode.replaceChildren(html);
  }
}