export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1180Alfa(ev, el) {
    if (ev.sender.prop("key") === "echo") {
      el.innerHTML = "PASSED";
    }
  }

  runTest1180Bravo(ev, el) {
    if (ev.sender.prop("key") === "foxtrot") {
      el.innerHTML = "PASSED";
    }
  }
}