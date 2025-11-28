export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1200Alfa(ev, el) {
    if (ev.sender.getFloat("key") === 99.7) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1200Bravo(ev, el) {
    if (ev.sender.getFloat("key") === 77.9) {
      el.innerHTML = "PASSED";
    }
  }
}
