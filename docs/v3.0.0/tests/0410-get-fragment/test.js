export default class {
  async runTest0410(_event, el) {
    const html = await this.api.getFragment(
      `/v3.0.0/tests/0410-get-fragment/payload/index.html`,
    );
    el.parentNode.replaceChildren(html);
  }
}