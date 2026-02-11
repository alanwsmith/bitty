window.ClassF5BBF = class {
  #count = 0;

  bittyReady() {
    this.#count += 1;
    this.api.trigger("signal_F5BBF");
  }

  signal_F5BBF(_, el) {
    if (this.#count === 1) {
      el.innerHTML = "ok";
    }
  }
};
