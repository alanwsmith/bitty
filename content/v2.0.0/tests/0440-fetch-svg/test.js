export default class {
  async runTest0440(_event, el) {
    const replacements = [[/FAILED/g, "PASSED"]];
    const newEl = await this.api.fetchSVG(
      `/v2.0.0/tests/0440-fetch-svg/payload.svg`,
      replacements,
    );
    el.parentNode.replaceChildren(newEl);
  }
}
