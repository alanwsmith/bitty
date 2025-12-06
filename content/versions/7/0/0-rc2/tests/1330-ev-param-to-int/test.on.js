export default class {
  bittyReady() {
    this.api.querySelector("div").click();
  }

  runTest1330(ev, _el) {
    if (ev.paramToInt("key") === 1330) {
      ev.target.innerHTML = "PASSED";
    }
  }
}
