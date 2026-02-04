export default class {
  bittyReady() {
    this.api.querySelector("input").click();
  }

  runTest1120(ev, el) {
    if (ev.sender.value === "target string") {
      ev.target.hidden = true;
      el.innerHTML = "PASSED";
    }
  }
}
