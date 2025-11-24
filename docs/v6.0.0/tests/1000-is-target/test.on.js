export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1000Alfa(_event, el) {
    if (el.isTarget) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1000Bravo(_event, el) {
    if (el.isTarget) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1000Charlie(_event, el) {
    if (!el.isTarget) {
      el.innerHTML = "PASSED";
    }
  }
}