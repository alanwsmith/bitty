export default class {
  async runTest0570(_event, el) {
    const url = `/v3.0.0/tests/0570-get-element-subs/payload/index.html`;
    const subs = [[/FAILED/g, "PASSED"]];
    const newEl = await this.api.getElement(
      url, subs
    );
    el.replaceChildren(newEl);
  }
}

