window.$CLASS_NAME = class {
  #t1;

  async bittyReady() {
    this.#t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the description above for why.     //
    //////////////////////////////////////////////
    await this.trigger("await:test_$SIGNAL_NAME");
    this.trigger("verify_$SIGNAL_NAME");
    //////////////////////////////////////////////
    //  See the prior example that combines     //
    //  multiple signals inside a single        //
    //  trigger to accommodate async/await.     //
    //  For example:                            //
    //  this.trigger("await:SIG_1 SIG_2");  //
    //                                          //
    //  See also the next example which         //
    //  demonstrates using `.trigger() calls    //
    //  inside individual events to utilize     //
    //  async/await across methods.             //
    //////////////////////////////////////////////
  }

  async test_$SIGNAL_NAME(_, el) {
    await this.sleep(50);
  }

  verify_$SIGNAL_NAME(_, el) {
    const t2 = performance.now();
    //////////////////////////////////////////////
    //  This result is less than the above      //
    //  sleep time because async/await has no   //
    //  practical effect on                     //
    //  this.trigger(SIGNALS)`              //
    //////////////////////////////////////////////
    if ((t2 - this.#t1) < 40) {
      el.innerHTML = "ok";
    }
  }
};
