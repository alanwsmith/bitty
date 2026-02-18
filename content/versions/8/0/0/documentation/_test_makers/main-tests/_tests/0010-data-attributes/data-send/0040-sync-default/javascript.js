window.$CLASS_NAME = class {
  #count = 0;

  bittyReady() {
    document.querySelector("#$CLICK_CLASS").click();
  }

  $SIGNAL_NAME(_, el) {
    this.#count += 1;
    if (this.#count === 1) {
      el.innerHTML = "ok";
    }
  }

  $SIGNAL2_NAME(_, el) {
    this.#count += 1;
    if (this.#count === 2) {
      el.innerHTML = "ok";
    }
  }

  $SIGNAL3_NAME(_, el) {
    this.#count += 1;
    if (this.#count === 3) {
      el.innerHTML = "ok";
    }
  }
};
