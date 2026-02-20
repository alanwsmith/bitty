window.$CLASS_NAME = class {
  #t1;

  async run_$SIGNAL_NAME() {
    this.#t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the description above for why.     //
    //////////////////////////////////////////////
    await this.trigger("await:$SIGNAL_NAME");
    this.trigger("$SIGNAL2_NAME");
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

  async $SIGNAL_NAME(_, el) {
    await this.sleep(1000);
    el.innerHTML = `updated at: ` + performance.now();
  }

  $SIGNAL2_NAME(_, el) {
    el.innerHTML = `updated at: ` + performance.now();
  }
};
