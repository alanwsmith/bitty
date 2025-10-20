export default class {
  async runTest0410(_event, el) {
    const newEl = await this.api.getHTML(
      `/v2.0.0/tests/0410-fetch-html/payload/index.html`,
    );
    el.parentNode.replaceChildren(newEl);
  }
}
