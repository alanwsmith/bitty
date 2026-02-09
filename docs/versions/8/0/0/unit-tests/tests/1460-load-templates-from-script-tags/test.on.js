export default class {
  bittyReady() {
    this.api.localTrigger("runTest1460");
  }
  runTest1460(_, el) {
    el.classList.remove("test");
    el.replaceChildren(
      this.api.makeHTML(
        this.api.template("testTemplate1460"),
      ),
    );
  }
}