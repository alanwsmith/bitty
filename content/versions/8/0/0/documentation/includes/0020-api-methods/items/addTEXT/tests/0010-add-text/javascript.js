window.Class34844 = class {
  bittyReady() {
    this.api.addTEXT("id-34844", "example-34844");
    this.api.trigger("signal_34844");
  }

  signal_34844(ev, el) {
    console.log(this.text);
    if (this.text["id-34844"] === "example-34844") {
      el.innerHTML = "ok";
    }
  }
};
