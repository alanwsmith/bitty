export default class {
  runTest0230(event, element) {
    element.innerHTML = "PASSED";
    this.api.forward(
      event,
      "secondSignal0230|thirdSignal0230|fourthSignal0230",
    );
  }

  secondSignal0230(_event, element) {
    element.innerHTML = "PASSED";
  }

  thirdSignal0230(_event, element) {
    element.innerHTML = "PASSED";
  }

  fourthSignal0230(_event, element) {
    element.innerHTML = "PASSED";
  }
}
