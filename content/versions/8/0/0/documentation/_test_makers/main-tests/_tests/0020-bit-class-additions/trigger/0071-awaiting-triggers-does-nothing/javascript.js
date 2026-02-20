window.$CLASS_NAME = class {
  #t1;

  async run_$SIGNAL_NAME() {
    this.#t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the notes section for details.     //
    //////////////////////////////////////////////
    await this.trigger("await:$SIGNAL_NAME");
    this.trigger("$SIGNAL2_NAME");
  }

  async $SIGNAL_NAME(_, el) {
    await this.sleep(1000);
    el.innerHTML = `updated at: ` + performance.now();
  }

  $SIGNAL2_NAME(_, el) {
    el.innerHTML = `updated at: ` + performance.now();
  }
};
