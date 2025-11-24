export default class {
  bittyReady() {
    [...this.api.querySelectorAll("[data-send]")].forEach((d) => {
      d.click();
    });
  }

  runTest0960Alfa(event, el) {
    if (this.api.matchSender(event, el)) {
      el.innerHTML = "PASSED";
    }
  }

  runTest0960Bravo(event, el) {
    el.classList.add("test");
    if (this.api.matchSender(event, el, "datakey")) {
      el.innerHTML = "PASSED";
    }
  }

  runTest0960Charlie(event, el) {
    el.classList.add("test");
    if (!this.api.matchSender(event, el, "datakey")) {
      el.innerHTML = "PASSED";
    }
  }

  runTest0960Delta(event, el) {
    el.classList.add("test");
    if (!this.api.matchTarget(event, el)) {
      el.innerHTML = "PASSED";
    }
  }
}