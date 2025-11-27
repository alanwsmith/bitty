export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  _runTest1190Alfa(ev, el) {
    if (ev.sender.getInt("key") === 7000) {
      el.innerHTML = "PASSED";
    }
  }

  _runTest1190Bravo(ev, el) {
    if (ev.sender.getInt("key") === 5000) {
      el.innerHTML = "PASSED";
    }
  }
}
