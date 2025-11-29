export default class {
  bittyReady() {
    this.api.querySelectorAll(".clickme").forEach((el) => {
      el.click();
    });
  }

  runTest0075(event, _el) {
    console.log("HERE1");
    this.api.forward(event, "forwardEvent0075");
  }

  forwardEvent0075(_event, el) {
    console.log("HERE2");
    el.innerHTML = "PASSED";
  }
}
