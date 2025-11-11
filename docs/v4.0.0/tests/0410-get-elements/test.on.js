export default class {
  async runTest0410(_event, el) {
    const url = `/v5.1.0/tests/0410-get-elements/payload.html`;
    const response = await this.api.getElements(url);
    el.parentNode.replaceChildren(response.ok);
  }
}