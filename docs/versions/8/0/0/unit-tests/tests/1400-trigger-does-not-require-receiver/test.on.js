export default class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runTest1400(ev, el) {
    this.api.localTrigger("catchTest1400");
  }

  catchTest1400(ev, _) {
    const div = this.api.querySelector("div");
    div.innerHTML = "PASSED";
  }
}