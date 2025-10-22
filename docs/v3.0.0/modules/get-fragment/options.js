export default class {
  async getFragmentOptions(_event, el) {
    const subs = [];
    const options = {
      method: "POST",
    };
    const content = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/options/index.html",
      subs,
      options
    );
    el.replaceChildren(content);
  }
}