export default class {
  bittyReady() {
    this.api.localTrigger("runTest0430");
  }

  async runTest0430(_event, el) {
    const url = "/versions/8/0/0/unit-tests/tests/0430-get-html-with-regex/payload/";
    const subs = [[/FAILED/g, "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}