export default class {
  #count = 0;

  incrementThenBranch(_event, _el) {
    this.#count += 1;
    if (this.#count % 2) {
      this.api.forward(null, "branchAlfa");
    } else {
      this.api.forward(null, "branchBravo");
    }
  }

  branchAlfa(_event, el) {
    el.innerHTML = this.#count;
  }

  branchBravo(_event, el) {
    el.innerHTML = this.#count;
  }
}