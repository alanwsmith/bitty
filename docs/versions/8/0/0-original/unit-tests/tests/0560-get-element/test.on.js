export default class {
  bittyReady() {
    this.api.localTrigger("runTest0560");
  }

  async runTest0560(_event, el) {
    const url = "/versions/8/0/0-original/unit-tests/tests/0560-get-element/payload/";
    const response = await this.api.getElement(url);
    if (response.value) {
      const newEl = response.value;
      if (newEl.dataset.bittyid) {
        newEl.innerHTML = "PASSED";
        el.parentNode.replaceChildren(newEl);
      }
    }
  }
}