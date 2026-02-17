window.$CLASS_NAME = class {
  bittyReady() {
    this.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, __) {
    this.trigger("test_$SIGNAL_NAME");
  }

  test_$SIGNAL_NAME(_, el) {
    const result = this.loadJSON("xxissing_key_$SIGNAL_NAME");
    console.log("asdf");
    console.log(this.json["issing_key_$SIGNAL_NAME"]);
    console.log(result);
    //el.innerHTML = JSON.parse(storage).data.status;
  }
};
