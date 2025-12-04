export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1150Alfa(ev, el) {
    if (ev.target.getString("key") === "alfa") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1150Bravo(ev, el) {
    if (ev.target.getString("key") === "bravo") {
      el.innerHTML = "PASSED";
    }
  }
}
