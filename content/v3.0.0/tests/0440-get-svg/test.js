export default class {
  async runTest0440(_event, el) {
    const url = `/v3.0.0/tests/0440-get-svg/payload.svg`;
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getSVG(url, subs);
    el.parentNode.replaceChildren(response.ok);
  }
}
