export default class {
  bittyReady() {
    this.api.localTrigger("runTest0420");
  }

  async runTest0420(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/0420-get-html-with-subs/payload/";
    const subs = [["FAILED", "PASSED"]];
    const response = await this.api.getHTML(url, subs);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}