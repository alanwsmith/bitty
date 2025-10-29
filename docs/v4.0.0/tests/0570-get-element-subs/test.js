export default class {
  async runTest0570(_event, el) {
    const url = `/[@ version_dir @]/tests/0570-get-element-subs/payload/index.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getElement(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}

