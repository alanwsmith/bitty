export default class {
  bittyInit() {
    const button = this.api.querySelector("button");
    button.click();
  }

  runTest(event, element) {
    element.innerHTML = "PASSED";
    this.api.forward(event, "secondSignal|thirdSignal|fourthSignal");
  }

  secondSignal(event, element) {
    element.innerHTML = "PASSED";
  }

  thirdSignal(event, element) {
    element.innerHTML = "PASSED";
  }

  fourthSignal(event, element) {
    element.innerHTML = "PASSED";
  }
}
