export default class {
  async getElementsOptions(_event, el) {
    const url =  "/[@ json.version.version_dir @]/payloads/get-elements/options.html";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.getElements(
      url, subs, options
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}