export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1180Alfa(ev, el) {
    if (el.senderDs("key") === "echo") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1180Bravo(ev, el) {
    if (el.senderDs("key") === "foxtrot") {
      el.innerHTML = "PASSED";
    }
  }
}
