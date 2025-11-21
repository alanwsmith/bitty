export default class {
  bittyReady() {
    this.api.trigger("runTest0077");
  }

  runTest0077(_event, _el) {
    this.api.trigger("triggerEvent0077");
  }

  triggerEvent0077(_event, el) {
    el.innerHTML = "PASSED";
  }
}
