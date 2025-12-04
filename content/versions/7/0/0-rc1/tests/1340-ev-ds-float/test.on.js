export default class {
  bittyReady() {
    this.api.querySelector("div").click();
  }

  runTest1340(ev, _el) {
    if (ev.dsFloat("key") === 13.40) {
      ev.target.innerHTML = "PASSED";
    }
  }
}
