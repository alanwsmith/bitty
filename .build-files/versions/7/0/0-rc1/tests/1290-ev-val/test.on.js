export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }
  passTest1290(_ev, el) {
    el.innerHTML = "PASSED";
  }

  runTest1290(ev, el) {
    ev.target.hidden = true;
    if (ev.val === "String For 1290") {
      this.api.trigger("passTest1290");
    }
  }
}