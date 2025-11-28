export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1090(ev, el) {
    if (el.targetStringValue === "target string") {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}