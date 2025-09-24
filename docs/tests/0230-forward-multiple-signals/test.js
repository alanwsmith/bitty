function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  async bittyInit() {
    await sleep(100) // time pad for test
    const button = this.api.querySelector("button");
    button.click();
  }

  runTest0230(event, element) {
    element.innerHTML = "PASSED";
    this.api.forward(event, "secondSignal0230|thirdSignal0230|fourthSignal0230");
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
