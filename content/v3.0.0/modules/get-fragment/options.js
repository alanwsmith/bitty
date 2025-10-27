export default class {
  async getFragmentOptions(_event, el) {
    const url =  "/v3.0.0/payloads/get-fragment/options/index.html";
    const subs = [];
    const options = {
      "method": "GET"
    };
    const response = await this.api.getFragment(
      url, subs, options
    );
    if (response.ok) {
      el.replaceChildren(response.ok);
    } else {
      el.innerHTML = response.error;
    }
  }
}