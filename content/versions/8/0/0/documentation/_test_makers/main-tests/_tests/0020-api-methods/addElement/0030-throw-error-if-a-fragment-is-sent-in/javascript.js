window.$CLASS_NAME = class {
  bittyReady() {
    this.api.trigger("given_$SIGNAL_NAME");
  }

  given_$SIGNAL_NAME(_, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = `<div></div>`;
    const result = this.addElement("$ID_NAME", fragment);
    this.api.send(result, "verify_$SIGNAL_NAME");
  }

  verify_$SIGNAL_NAME(payload, el) {
    console.log(payload);
    // if (this.element["$ID_NAME"] === `<div>ok</div>`) {
    //   el.innerHTML = "ok";
    // }
  }
};
