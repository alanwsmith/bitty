export default class {
  #updates = 0;

  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest1370(ev, el) {
    el.replaceChildren(
      this.api.makeElement(`<div class="test">PASSED</div>`),
    );
  }
}