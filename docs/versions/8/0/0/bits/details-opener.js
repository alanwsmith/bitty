export default class {
  bittyReady() {
    this.loadJSON(this.key(), { openItems: [] });
    console.log(this.json[this.key()]);
    this.trigger("initPage");
  }

  key() {
    return `details-${window.location.pathname}`;
  }

  initPage() {
    const elements = document.querySelectorAll("details");

    console.log(elements);

    // const pathname = window.location.pathname;
    // if (this.#states.pages[pathname]) {
    //   const elements = document.querySelectorAll("details");
    //   if (elements.length !== this.#states.pages[pathname].length) {
    //     this.#states.pages[pathname] = [];
    //   }
    //   elements.forEach((el, elIndex) => {
    //     if (this.#states.pages[pathname][elIndex]) {
    //       el.open = true;
    //     }
    //   });
    // }
  }

  /*
  #storageKey = "detailsOpener";
  #states;

  bittyReady() {
    this.loadStates();
    this.setStates();
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
      { pages: {} },
    );
  }

  setStates() {
    const pathname = window.location.pathname;
    if (this.#states.pages[pathname]) {
      const elements = document.querySelectorAll("details");
      if (elements.length !== this.#states.pages[pathname].length) {
        this.#states.pages[pathname] = [];
      }
      elements.forEach((el, elIndex) => {
        if (this.#states.pages[pathname][elIndex]) {
          el.open = true;
        }
      });
    }
  }

  updateStates() {
    const pathname = window.location.pathname;
    const elements = document.querySelectorAll("details");
    if (!this.#states.pages[pathname]) {
      this.#states.pages[pathname] = [];
    }
    if (elements.length !== this.#states.pages[pathname].length) {
      this.#states.pages[pathname] = [];
    }
    elements.forEach((el, elIndex) => {
      this.#states.pages[pathname][elIndex] = el.open;
    });
    this.api.setStorage(this.#storageKey, this.#states);
  }
  */
}
