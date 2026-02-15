window.Class754F8 = class {
  #_updated = false;
  #_t1;

  async bittyReady() {
    this.#_t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the description above for why.     //
    //////////////////////////////////////////////
    await this.api.send({ updated: true }, "await:test_signal_754F8");
    this.api.send({}, "verify_signal_754F8");
    //////////////////////////////////////////////
    //  See the prior example that combines     //
    //  multiple signals inside a single        //
    //  send to accommodate async/await.        //
    //  For example:                            //
    //  this.api.send({}, "await:SIG_1 SIG_2"); //
    //                                          //
    //  See also the next example which         //
    //  demonstrates using `.send() calls       //
    //  inside individual events to utilize     //
    //  async/await across methods.             //
    //////////////////////////////////////////////
  }

  async test_signal_754F8(ev, el) {
    await this.api.sleep(50);
    this.#_updated = ev.payload.updated;
  }

  verify_signal_754F8(ev, el) {
    const t2 = performance.now();
    //////////////////////////////////////////////
    //  This result is less than the above      //
    //  sleep time because async/await has no   //
    //  practical effect on                     //
    //  this.api.send(PAYLOAD, SIGNALS)`        //
    //////////////////////////////////////////////
    if (this.#_updated === false) {
      el.innerHTML = "ok";
    }
  }
};
