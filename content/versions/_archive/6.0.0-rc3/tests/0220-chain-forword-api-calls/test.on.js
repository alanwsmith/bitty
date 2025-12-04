// Ensure the `data-send` value of the
// event generating element doesn't
// get changed

export default class {
  #counterAlfa = 0;
  #counterBravo = 0;
  #counterCharlie = 0;
  #counterDelta = 0;

  bittyInit() {
    const button = this.api.querySelector("button");
    button.click();
    button.click();
    button.click();
    button.click();
  }

  runTest0220(event, element) {
    this.#counterAlfa += 1;
    event.target.dataset.counter = `${this.#counterAlfa}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
    this.api.forward(event, "secondSignal0220");
  }

  secondSignal0220(event, element) {
    this.#counterBravo += 1;
    event.target.dataset.counter = `${this.#counterBravo}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
    this.api.forward(event, "thirdSignal0220");
  }

  thirdSignal0220(event, element) {
    this.#counterCharlie += 1;
    event.target.dataset.counter = `${this.#counterCharlie}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
    this.api.forward(event, "fourthSignal0220");
  }

  fourthSignal0220(event, element) {
    this.#counterDelta += 1;
    event.target.dataset.counter = `${this.#counterDelta}`;
    if (event.target.dataset.counter == "4") {
      element.innerHTML = "PASSED";
    }
  }

  //
}
