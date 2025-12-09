export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1190Alfa(ev, el) {
    if (ev.sender.propToInt("key") === 6767) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1190Bravo(ev, el) {
    if (ev.sender.propToInt("key") === 3434) {
      el.innerHTML = "PASSED";
    }
  }
}
