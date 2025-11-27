export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  _runTest1200Alfa(ev, el) {
    if (ev.sender.getFloat("key") === 4.2) {
      el.innerHTML = "PASSED";
    }
  }

  _runTest1200Bravo(ev, el) {
    if (ev.sender.getFloat("key") === 4.5) {
      el.innerHTML = "PASSED";
    }
  }
}