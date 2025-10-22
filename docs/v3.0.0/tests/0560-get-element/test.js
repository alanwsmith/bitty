export default class {
  async runTest0560(_event, el) {
    const url = `/v3.0.0/tests/0560-get-element/payload/index.html`;
    const newEl = await this.api.getElement(
      url
    );
    el.parentNode.replaceChildren(newEl);
  }
}
