export default class {
  async runTest0560(_event, el) {
    const url = `/[@ version_dir @]/tests/0560-get-element/payload/index.html`;
    const response = await this.api.getElement(url);
    if (response.ok) {
      el.parentNode.replaceChildren(response.ok);
    }
  }
}

