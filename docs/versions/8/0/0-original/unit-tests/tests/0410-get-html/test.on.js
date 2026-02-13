export default class {
  bittyReady() {
    this.api.localTrigger("runTest0410");
  }

  async runTest0410(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/0410-get-html/payload/";
    const response = await this.api.getHTML(url);
    if (response.value) {
      el.parentNode.replaceChildren(response.value);
    }
  }
}