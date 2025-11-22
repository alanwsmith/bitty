export default class {
  runTest0075(event, _el) {
    this.api.forward(event, "forwardEvent0075");
  }

  forwardEvent0075(_event, el) {
    el.innerHTML = "PASSED";
  }
}
