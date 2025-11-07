export default class {
  async runTest0410(_event, el) {
    const url = `/[@ json.version.version_dir @]/tests/0410-get-html/payload.html`;
    const response = await this.api.getHTML(url);
    el.parentNode.replaceChildren(response.ok);
  }
}

