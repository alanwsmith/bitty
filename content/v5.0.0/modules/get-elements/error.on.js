export default class {
  async getElementsError(_event, el) {
    const url = "/[@ json.version.version_dir @]/payloads/get-elements/intentionally-missing-file.html";
    const response = await this.api.getElements(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}
