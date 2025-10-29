export default class {
  async getFragmentBasic(_event, el) {
    const response = await this.api.getFragment(
      "/v4.0.0/payloads/get-fragment/basic.html"
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}