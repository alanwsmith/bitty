export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1160Alfa(ev, el) {
    if (el.targetDsInt("key") === 7000) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1160Bravo(ev, el) {
    if (el.targetDsInt("key") === 5000) {
      el.innerHTML = "PASSED";
    }
  }
}