export default class {
  bittyInit() {
    this.api.forward(null, "runTest0007")
  }

  runTest0007(_event, el) {
    el.innerHTML = "PASSED";
  }
}