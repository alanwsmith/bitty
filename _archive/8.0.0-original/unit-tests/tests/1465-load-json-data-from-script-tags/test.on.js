export default class {
  bittyReady() {
    this.api.localTrigger("runTest1465");
  }
  runTest1465(_, el) {
    el.innerHTML = this.api.data("testData1465").testKey1465;
  }
}
