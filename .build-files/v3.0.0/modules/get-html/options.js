export default class {
  async getOptionsHTML(_event, el) {
    const subs = [];
    const options = {
      method: "POST",
    };
    const content = await this.api.getHTML(
      "/v3.0.0/payloads/get-html/options/index.html",
      subs,
      options
    );
    el.replaceChildren(content);
  }
}