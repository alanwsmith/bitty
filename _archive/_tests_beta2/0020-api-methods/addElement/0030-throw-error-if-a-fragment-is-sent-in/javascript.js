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

  verify_$SIGNAL_NAME(result, el) {
    if (result.ok === false) {
      console.log(result.error);
      el.innerHTML = "ok";
    }
  }
};
