export default class {
  bittyReady() {
    this.api.localTrigger("runTest1040Alfa runTest1040Bravo");
    this.api.trigger("runTest1040Charlie runTest1040Delta");
  }
  runTest1040Alfa(_event, el) {
    if (el.dsFloat("key") === 1.1) {
      el.innerHTML = "PASSED";
    }
  }
  runTest1040Bravo(_event, el) {
    if (el.dsFloat("key") === 2.2) {
      el.innerHTML = "PASSED";
    }
  }
  runTest1040Charlie(_event, el) {
    if (el.dsFloat("key") === 3.3) {
      el.innerHTML = "PASSED";
    }
  }
  runTest1040Delta(_event, el) {
    if (el.dsFloat("key") === 4.4) {
      el.innerHTML = "PASSED";
    }
  }
}