export default class {
  async getHTMLRegEx(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const response = await this.api.getHTML(
      "/v5.1.0/payloads/get-html/regex.html",
      subs
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}