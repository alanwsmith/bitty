export default class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runTest1440(ev, el) {
    this.api.localTrigger("checkTest1440");
  }

  checkTest1440(ev, el) {
    if (ev.bittyId !== undefined) {
      el.innerHTML = "PASSED";
    }
  }

}