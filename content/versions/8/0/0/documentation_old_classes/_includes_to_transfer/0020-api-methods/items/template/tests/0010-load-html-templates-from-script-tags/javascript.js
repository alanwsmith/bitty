window.ClassECC83 = class {
  bittyReady() {
    this.api.trigger("signal_ECC83");
  }

  signal_ECC83(ev, el) {
    const target = `<div>example template</div>`;
    const template = this.api.template("id-ECC83").trim();
    if (target === template) {
      el.innerHTML = "ok";
    }
  }
};
