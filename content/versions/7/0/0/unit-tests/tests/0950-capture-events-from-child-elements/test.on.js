export default class {
  bittyReady() {
    this.api.querySelector("[data-receive]").click();
  }

  runTest0950(event, el) {
    el.innerHTML = "PASSED";
  }
}
