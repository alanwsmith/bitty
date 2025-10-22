export default class {
  async runTest0580(_event, el) {
    const url = `/v3.0.0/tests/0580-get-element-error/intentionally-missing-file.html`;
    const expectedError = await this.api.getElement(url);
    if (expectedError.error.status === 404) {
      el.innerHTML = "PASSE";
    } 
  }
}
