export default class {
  async getHTMLSubs(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const response = await this.api.getHTML(
      "/v5.0.0/payloads/get-html/subs.html",
      subs
    );
    if (response.value) {
      el.replaceChildren(response.value);
    } else {
      el.innerHTML = response.error;
    }
  }
}