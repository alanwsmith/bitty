export default class {
  async getFragmentUndefined(_event, el) {
    const html = await this.api.getFragment(
      "/v3.0.0/payloads/get-fragment/intentionally-missing-file.html"
    );
    el.innerHTML = html;
  }
}