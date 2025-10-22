export default class {
  async getSubsHTML(_event, el) {
    const subs = [
      ["SPEED", "slow"],
      ["KIND", "red"]
    ];
    const content = await this.api.getHTML(
      "/v3.0.0/payloads/get-html/subs/index.html",
      subs
    );
    el.replaceChildren(content);
  }
}