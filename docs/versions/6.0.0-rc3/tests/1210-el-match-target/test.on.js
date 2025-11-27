export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1210Alfa(ev, el) {
    if (el.matchTarget("key")) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1210Bravo(ev, el) {
    if (!el.matchTarget("key")) {
      el.innerHTML = "PASSED";
    }
  }
}