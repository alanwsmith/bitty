function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default class {
  #passed = 0;
  #failed = 0;

  async showResults(_event, element) {
    element.innerHTML = "Gathering test results...";
    await sleep(1200);
    const els = document.querySelectorAll(".test");
    [...els].forEach((el) => {
      if (el.innerHTML == "PASSED") {
        this.#passed += 1;
        el.classList.add("test-passed");
      } else {
        console.log(el)
        this.#failed += 1;
        el.classList.add("test-failed");
      }
    });
    if (this.#failed == 0) {
      element.innerHTML = `
<div class="test-passed">PASSED: ${this.#passed}</div>
<div>Failed: ${this.#failed}</div>`;
    } else {
      element.innerHTML = `
<div>PASSED: ${this.#passed}</div>
<div class="test-failed">Failed: ${this.#failed}</div>`;
    }
  }
}