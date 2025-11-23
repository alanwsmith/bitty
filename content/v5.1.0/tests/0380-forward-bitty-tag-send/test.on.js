export default class {
  runTest0380(event, _el) {
    this.api.forward(event, "runTest0380forward");
  }

  runTest0380forward(event, el) {
    if (event.type === "bittytagdatasend") {
      el.innerHTML = "PASSED";
    }
  }
}
