export default class {
  async getRegExHTML(_event, el) {
    const subs = [
      [/SPEED/g, "fast"],
      [/KIND/g, "arctic"]
    ];
    const content = await this.api.getHTML(
      "/v3.0.0/payloads/get-html/subs/index.html",
      subs
    );
    el.replaceChildren(content);
  }
}