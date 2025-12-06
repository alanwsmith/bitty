export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1150Alfa(ev, el) {
    if (el.targetDs("key") === "alfa") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1150Bravo(ev, el) {
    if (el.targetDs("key") === "bravo") {
      el.innerHTML = "PASSED";
    }
  }
}