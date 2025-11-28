export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1170Alfa(ev, el) {
    if (ev.target.getFloat("key") === 4.2) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1170Bravo(ev, el) {
    if (ev.target.getFloat("key") === 4.5) {
      el.innerHTML = "PASSED";
    }
  }
}
