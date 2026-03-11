window.$CLASS_NAME = class {
  #_updated = false;
  #_t1;

  async bittyReady() {
    this.#_t1 = performance.now();
    //////////////////////////////////////////////
    //  THIS DOES NOT WORK AS YOU MIGHT EXPECT  //
    //  Read the description above for why.     //
    //////////////////////////////////////////////
    await this.api.send({ updated: true }, "await:test_$SIGNAL_NAME");
    this.api.send({}, "verify_$SIGNAL_NAME");
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

  async test_$SIGNAL_NAME(payload, el) {
    await this.api.sleep(50);
    this.#_updated = payload.updated;
  }

  verify_$SIGNAL_NAME(payload, el) {
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
