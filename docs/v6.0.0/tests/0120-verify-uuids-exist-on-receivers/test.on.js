export default class {
  bittyInit() {
    this.api.trigger("runTest0120")
  }
  runTest0120(_event, element) {
    if (element.dataset.bittyid !== undefined) {
      element.innerHTML = "PASSED";
    }
  }
}