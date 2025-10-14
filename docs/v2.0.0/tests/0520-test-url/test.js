export default class {
  runTest0520(_event, el) {
    if (
      this.api.url.hostname === "localhost" ||
      this.api.url.hostname === "bitty.alanwsmith.com"
    ) {
      el.innerHTML = "PASSED";
    }
  }
}