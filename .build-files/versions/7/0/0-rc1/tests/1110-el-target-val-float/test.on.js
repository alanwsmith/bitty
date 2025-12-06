export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1110(ev, el) {
    if (el.targetValFloat === 1.1) {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}