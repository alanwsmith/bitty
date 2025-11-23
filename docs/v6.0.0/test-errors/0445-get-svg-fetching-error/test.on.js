export default class {
  async runTest0445(_event, el) {
    const url = `/v6.0.0/tests/0445-get-svg/intentionally-missing-file.svg`;
    const response = await this.api.getSVG(url);
    if (response.error) {
      el.innerHTML = "PASSED"
    };
  }
}