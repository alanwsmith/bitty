export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1150Alfa(ev, el) {
    if (el.targetStringData("key") === "alfa") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1150Bravo(ev, el) {
    if (el.targetStringData("key") === "bravo") {
      el.innerHTML = "PASSED";
    }
  }
}