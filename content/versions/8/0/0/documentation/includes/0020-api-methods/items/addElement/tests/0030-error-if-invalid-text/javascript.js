window.Class54044 = class {
  bittyReady() {
    this.api.trigger("given_signal_54044");
  }

  given_signal_54044(_, el) {
    const result = this.addElement("id-54044", `<div><span>x</div></span>`);
    this.api.send(result, "verify_signal_54044");
  }

  verify_signal_54044(payload, el) {
    console.log(payload);
    // if (this.element["id-54044"] === `<div>ok</div>`) {
    //   el.innerHTML = "ok";
    // }
  }
};
