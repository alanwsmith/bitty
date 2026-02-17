window.ClassA665B = class {
  bittyReady() {
    this.api.trigger("given_signal_A665B");
  }

  given_signal_A665B(_, el) {
    const fragment = document.createDocumentFragment();
    fragment.innerHTML = `<div></div>`;
    const result = this.addElement("id-A665B", fragment);
    this.api.send(result, "verify_signal_A665B");
  }

  verify_signal_A665B(result, el) {
    if (result.ok === false) {
      console.log(result.error);
      el.innerHTML = "ok";
    }
  }
};
