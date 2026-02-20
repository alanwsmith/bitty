window.ClassCBE64 = class {
  #updates = [];

  bittyReady() {
    this.trigger(
      `signal_CBE64 signal_CBE64_2 signal_CBE64_3`,
    );
  }

  signal_CBE64(_, el) {
    this.#updates.push("bug");
    el.innerHTML = this.#updates[0];
  }

  signal_CBE64_2(_, el) {
    this.#updates.push("bug");
    el.innerHTML = this.#updates[1];
  }

  signal_CBE64_3(_, el) {
    if (this.#updates.length === 2) {
      el.innerHTML = "ok";
    }
  }
};
