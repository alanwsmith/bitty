export default class {
  bittyReady() {
    this.loadJSON(this.key(), { openItems: [] });
    this.trigger("checkSize initPage");
  }

  checkSize() {
    if (
      this.json[this.key()].openItems.length !==
        document.querySelectorAll("details").length
    ) {
      this.json[this.key()].openItems = [];
    }
  }

  initPage() {
    document.querySelectorAll("details").forEach((detailsEl, index) => {
      if (this.json[this.key()][index]) {
        detailsEl.open = true;
      }
      detailsEl.addEventListener("toggle", (ev) => {
        this.update();
      });
    });
  }

  key() {
    return `details-${window.location.pathname}`;
  }

  update() {
    document.querySelectorAll("details").forEach((detailsEl, index) => {
      this.json[this.key()][index] = detailsEl.open;
    });
    this.saveJSON(this.key());
  }

  // console.log(elements);

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
