[!- include "versions/6.0.0-rc3/vars.html" -!]

export default class {
  bittyReady() {
    this.api.localTrigger("runTest0445");
  }

  async runTest0445(_event, el) {
    const url = `/[@ version_dir @]/tests/0445-get-svg/intentionally-missing-file.svg`;
    const response = await this.api.getSVG(url);
    if (response.error) {
      el.innerHTML = "PASSED"
    };
  }
}
