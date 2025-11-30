export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  passTest1300(_ev, el) {
    el.innerHTML = "PASSED";
  }

  runTest1300(ev, el) {
    ev.target.hidden = true;
    if (ev.valueInt === 1300) {
      this.api.trigger("passTest1300");
    }
  }
}