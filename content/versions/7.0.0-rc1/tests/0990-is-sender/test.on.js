export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest0990Alfa(_event, el) {
    if (el.isSender) {
      el.innerHTML = "PASSED";
    }
  }

  runTest0990Bravo(_event, el) {
    if (!el.isSender) {
      el.innerHTML = "PASSED";
    }
  }
}
