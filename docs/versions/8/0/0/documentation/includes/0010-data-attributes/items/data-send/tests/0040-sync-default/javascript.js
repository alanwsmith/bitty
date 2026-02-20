window.Class136FB = class {
  #count = 0;

  bittyReady() {
    document.querySelector("#el-136FB").click();
  }

  signal_136FB(_, el) {
    this.#count += 1;
    if (this.#count === 1) {
      el.innerHTML = "ok";
    }
  }

  signal_136FB_2(_, el) {
    this.#count += 1;
    if (this.#count === 2) {
      el.innerHTML = "ok";
    }
  }

  signal_136FB_3(_, el) {
    this.#count += 1;
    if (this.#count === 3) {
      el.innerHTML = "ok";
    }
  }
};
