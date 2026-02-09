export default class {
  bittyReady() {
    this.api.localTrigger("runTest0110");
  }

  runTest0110(event, el) {
    if (el.prop("bittyid") !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
