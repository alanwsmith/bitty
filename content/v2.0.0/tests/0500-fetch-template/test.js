export default class {
  async runTest0500(_event, el) {
    const url = "/v2.0.0/tests/0500-fetch-template/template/";
    const subs = [[/FAILED/g, "PASSED"]];
    const template = await this.api.fetchTemplate(url, subs);
    const newEl = this.api.useTemplate(template);
    el.parentNode.replaceChildren(newEl);
  }
}
