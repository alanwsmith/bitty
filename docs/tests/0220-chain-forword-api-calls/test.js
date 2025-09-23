// Ensure the `data-send` value of the
// event generating element doesn't
// get changed
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


export default class {
  #counterAlfa = 0;
  #counterBravo = 0;
  #counterCharlie = 0;
  #counterDelta = 0;

  async bittyInit() {
    await sleep(100) // time pad for test
    const button = this.api.querySelector("button");
    button.click();
    button.click();
    button.click();
    button.click();
  }

  runTest(event, element) {
    this.#counterAlfa += 1;
    event.target.dataset.counter = `${this.#counterAlfa}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
    this.api.forward(event, "secondSignal");
  }

  secondSignal(event, element) {
    this.#counterBravo += 1;
    event.target.dataset.counter = `${this.#counterBravo}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
    this.api.forward(event, "thirdSignal");
  }

  thirdSignal(event, element) {
    this.#counterCharlie += 1;
    event.target.dataset.counter = `${this.#counterCharlie}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
    this.api.forward(event, "fourthSignal");
  }

  fourthSignal(event, element) {
    this.#counterDelta += 1;
    event.target.dataset.counter = `${this.#counterDelta}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
  }

  //
}
