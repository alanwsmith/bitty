export default class {
  async getElementBasic(_event, el) {
    const url = "/[@ version_dir @]/payloads/get-element/basic/index.html";
    const response = await this.api.getElement(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}

