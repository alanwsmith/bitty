export default class {
  #storageKey = "detailsOpener";
  #states;

  bittyReady() {
    this.loadStates();
    this.addListener();
  }

  addListener() {
    document.querySelectorAll("details")
      .forEach((el) => {
        el.addEventListener("toggle", (ev) => {
          this.updateStates();
        });
      });
  }

  loadStates() {
    this.#states = this.api.getStorageOr(
      this.#storageKey,
      { elements: [] },
    );
    const elements = document.querySelectorAll("details");
    if (elements.length !== this.#states.elements.length) {
      this.#states = { elements: [] };
    }
    elements.forEach((el, elIndex) => {
      if (this.#states.elements[elIndex]) {
        el.open = true;
      }
    });
  }

  updateStates() {
    const elements = document.querySelectorAll("details");
    if (elements.length !== this.#states.elements.length) {
      this.#states = { elements: [] };
    }
    elements.forEach((el, elIndex) => {
      this.#states.elements[elIndex] = el.open;
    });
    this.api.setStorage(this.#storageKey, this.#states);
  }
}
