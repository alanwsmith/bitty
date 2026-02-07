export default class {
  runTest1460(_, el) {
    el.classList.remove("test");
    el.replaceChildren(
      this.api.makeHTML(
        this.api.template("testTemplate1460"),
      ),
    );
  }
}
