export default class {
  bittyReady() {
    this.api.querySelector("button").click();
  }

  runTest1390(ev, el) {
    this.api.forward(ev, "catchTest1390");
  }

  catchTest1390(ev, _) {
    const div = this.api.querySelector("div");
    div.innerHTML = "PASSED";
  }
}