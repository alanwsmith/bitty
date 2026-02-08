export default class {
  bittyReady() {
    this.api.localTrigger("runTest1520");
  }
  runTest1520(_, el) {
    el.setCSS("test1520", "PASSED");
    el.innerHTML = el.dataset.test1520;
  }
}