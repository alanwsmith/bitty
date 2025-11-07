export default class {
  async runTest0410(_event, el) {
    const url = `/[@ json.version.version_dir @]/tests/0410-get-elements/payload.html`;
    const response = await this.api.getElements(url);
    el.parentNode.replaceChildren(response.ok);
  }
}

