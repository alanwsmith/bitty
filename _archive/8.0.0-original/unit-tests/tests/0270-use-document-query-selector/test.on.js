export default class {
  bittyReady() {
    this.api.localTrigger("runTest0270");
  }

  runTest0270(_event, _element) {
    const el = document.querySelector("#testDocumentQuerySelectorTarget0270");
    el.innerHTML = "PASSED";
  }
}
