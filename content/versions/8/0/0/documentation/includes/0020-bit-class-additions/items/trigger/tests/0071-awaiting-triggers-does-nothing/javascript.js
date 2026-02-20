window.Class7DC67 = class {
  #t1;

  async run_signal_7DC67() {
    this.#t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the description above for why.     //
    //////////////////////////////////////////////
    await this.trigger("await:signal_7DC67");
    this.trigger("signal_7DC67_2");
    //////////////////////////////////////////////
    //  See the prior example that combines     //
    //  multiple signals inside a single        //
    //  trigger to accommodate async/await.     //
    //  For example:                            //
    //  this.trigger("await:SIG_1 SIG_2");      //
    //                                          //
    //  See also the next example which         //
    //  demonstrates using `.trigger() calls    //
    //  inside individual events to utilize     //
    //  async/await across methods.             //
    //////////////////////////////////////////////
  }

  async signal_7DC67(_, el) {
    await this.sleep(1000);
    el.innerHTML = `updated at: ` + performance.now();
  }

  signal_7DC67_2(_, el) {
    el.innerHTML = `updated at: ` + performance.now();
  }
};
