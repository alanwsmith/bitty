window.ClassB0FE1 = class {
  #t1;

  async bittyReady() {
    this.#t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the description above for why.     //
    //////////////////////////////////////////////
    await this.api.trigger("await:test_signal_B0FE1");
    this.api.trigger("verify_signal_B0FE1");
    //////////////////////////////////////////////
    //  See the prior example that combines     //
    //  multiple signals inside a single        //
    //  trigger to accommodate async/await.     //
    //  For example:                            //
    //  this.api.trigger("await:SIG_1 SIG_2");  //
    //                                          //
    //  See also the next example which         //
    //  demonstrates using `.trigger() calls    //
    //  inside individual events to utilize     //
    //  async/await across methods.             //
    //////////////////////////////////////////////
  }

  async test_signal_B0FE1(_, el) {
    await this.api.sleep(50);
  }

  verify_signal_B0FE1(_, el) {
    const t2 = performance.now();
    //////////////////////////////////////////////
    //  This result is less than the above      //
    //  sleep time because async/await has no   //
    //  practical effect on                     //
    //  this.api.trigger(SIGNALS)`              //
    //////////////////////////////////////////////
    if ((t2 - this.#t1) < 40) {
      el.innerHTML = "ok";
    }
  }
};
