export default class {
  async getHTMLOptions(_event, el) {
    const url =  "/[@ json.version.version_dir @]/payloads/get-html/options.html";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.getHTML(
      url, subs, options
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}