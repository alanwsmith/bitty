export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1180Alfa(ev, el) {
    if (el.senderData("key") === "echo") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1180Bravo(ev, el) {
    if (el.senderData("key") === "foxtrot") {
      el.innerHTML = "PASSED";
    }
  }
}
