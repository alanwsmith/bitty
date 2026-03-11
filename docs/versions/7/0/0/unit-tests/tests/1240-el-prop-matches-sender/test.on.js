export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1240Alfa(ev, el) {
    if (el.propMatchesSender("key")) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1240Bravo(ev, el) {
    if (!el.propMatchesSender("key")) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1240Charlie(ev, el) {
    if (el.propMatchesSender("key")) {
      el.innerHTML = "PASSED";
    }
  }
}