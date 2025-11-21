export default class {
  bittyInit() {
    this.api.trigger("runTest0007")
  }

  runTest0007(_event, el) {
    el.innerHTML = "PASSED";
  }
}