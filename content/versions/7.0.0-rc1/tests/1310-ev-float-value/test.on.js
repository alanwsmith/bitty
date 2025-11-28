export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  passTest1310(_ev, el) {
    el.innerHTML = "PASSED";
  }

  runTest1310(ev, el) {
    ev.target.hidden = true;
    if (ev.floatValue === 13.10) {
      this.api.trigger("passTest1310");
    }
  }
}
