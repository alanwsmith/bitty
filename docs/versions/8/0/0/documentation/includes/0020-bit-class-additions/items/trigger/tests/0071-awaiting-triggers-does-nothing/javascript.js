window.Class7DC67 = class {
  #t1;

  async run_signal_7DC67() {
    this.#t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the notes section for details.     //
    //////////////////////////////////////////////
    await this.trigger("await:signal_7DC67");
    this.trigger("signal_7DC67_2");
  }

  async signal_7DC67(_, el) {
    await this.sleep(1000);
    el.innerHTML = `updated at: ` + performance.now();
  }

  signal_7DC67_2(_, el) {
    el.innerHTML = `updated at: ` + performance.now();
  }
};
