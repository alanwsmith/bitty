export default class {
  async getHTMLOptions(_event, el) {
    const url =  "/v5.0.0/payloads/get-html/options.html";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.getHTML(
      url, subs, options
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}