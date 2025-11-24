export default class {
  bittyReady() {
    this.api.trigger("runTest1030Alfa runTest1030Bravo");
  }
  runTest1030Alfa(_event, el) {
    el.innerHTML = "PASSED";
  }
  runTest1030Bravo(_event, el) {
    el.innerHTML = "PASSED";
  }
}