export default class {
  async runTest0410(_event, el) {
    const url = `/v3.0.0/tests/0410-get-fragment/payload/index.html`;
    const response = await this.api.getFragment(url);
    el.parentNode.replaceChildren(response.ok);
  }
}