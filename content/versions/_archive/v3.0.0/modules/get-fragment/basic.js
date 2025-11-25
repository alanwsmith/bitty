export default class {
  async getFragmentBasic(_event, el) {
    const response = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/basic/index.html"
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}