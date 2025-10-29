export default class {
  async runTest0410(_event, el) {
    const url = `/[@ json.version.version_dir @]/tests/0410-get-fragment/payload/index.html`;
    const response = await this.api.getFragment(url);
    el.parentNode.replaceChildren(response.ok);
  }
}
