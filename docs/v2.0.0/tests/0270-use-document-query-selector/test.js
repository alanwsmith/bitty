export default class {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest0270(_event, _element) {
    const el = document.querySelector("#testDocumentQuerySelectorTarget");
    el.innerHTML = "PASSED";
  }
}