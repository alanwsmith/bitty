window.ClassD89BE = class {
  bittyReady() {
    this.trigger("given_signal_D89BE");
  }

  given_signal_D89BE(_, __) {
    this.trigger("test_signal_D89BE");
  }

  test_signal_D89BE(_, el) {
    const result = this.loadJSON("xxissing_key_signal_D89BE");
    console.log("asdf");
    console.log(this.json["issing_key_signal_D89BE"]);
    console.log(result);
    //el.innerHTML = JSON.parse(storage).data.status;
  }
};
