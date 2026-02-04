export default class {
  /*
  bittyInit() {
    const div = this.api.makeElement(template);
    if (this.api.bittyId !== undefined) {
      div.innerHTML = "PASSED";
    }
    this.api.appendChild(div);
  }
  */

  runTest1460(_, el) {
    el.replaceChildren(
      this.api.makeHTML(
        this.api.template("testTemplate1460"),
      ),
    );
  }
}
