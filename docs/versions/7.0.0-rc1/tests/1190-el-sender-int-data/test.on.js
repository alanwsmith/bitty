export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1190Alfa(ev, el) {
    if (el.senderIntData("key") === 6767) {
      el.innerHTML = "PASSED";
    }
  }

  runTest1190Bravo(ev, el) {
    if (el.senderIntData("key") === 3434) {
      el.innerHTML = "PASSED";
    }
  }
}