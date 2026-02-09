export default class {
  bittyReady() {
    this.api.trigger("initTest0130");
  }

  initTest0130(_event, el) {
    el.replaceChildren(
      this.api.makeElement(this.api.template("testTemplate0130")),
    );
    this.api.trigger("runTest0130");
    el.classList.remove("test");
  }

  runTest0130(event, el) {
    if (el.dataset.bittyid !== undefined) {
      el.innerHTML = "PASSED";
    }
  }
}
