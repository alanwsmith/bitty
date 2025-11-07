export default class {
  async getFragmentError(_event, el) {
    const url = "/v4.0.0/payloads/get-fragment/intentionally-missing-file.html";
    const response = await this.api.getFragment(url);
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}