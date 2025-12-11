export default class {
  async runTest0560(_event, el) {
    const url = "/unit-tests/7/0/0/tests/0560-get-element/payload/";
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