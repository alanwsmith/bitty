[!- include "versions/6.0.0-rc2/vars.html" -!]

export default class {
  async runTest0560(_event, el) {
    const url =
      `/[@ version_dir @]/tests/0560-get-element/payload.html`;
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
