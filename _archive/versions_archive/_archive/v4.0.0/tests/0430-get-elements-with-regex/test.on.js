export default class {
  async runTest0430(_event, el) {
    const url = `/[@ json.version.version_dir @]/tests/0430-get-elements-with-regex/payload.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElements(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}
