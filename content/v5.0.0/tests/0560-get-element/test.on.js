export default class {
  async runTest0560(_event, el) {
    const url = `/[@ json.version.version_dir @]/tests/0560-get-element/payload.html`;
    const response = await this.api.getElement(url);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}

