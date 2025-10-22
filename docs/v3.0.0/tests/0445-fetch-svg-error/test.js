export default class {
  async runTest0445(_event, el) {
    const svg = await this.api.getSVG(
      `/v3.0.0/tests/0445-fetch-svg/intentionally-missing-file.svg`
    );
    if (svg === undefined) {
      el.innerHTML = "PASSED"
    };
  }
}