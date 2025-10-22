export default class {
  async getFragmentBasic(_event, el) {
    const content = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/basic/index.html"
    );
    el.replaceChildren(content);
  }
}