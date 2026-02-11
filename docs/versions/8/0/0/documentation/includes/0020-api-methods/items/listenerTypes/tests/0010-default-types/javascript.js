window.Class8F135 = class {
  bittyReady() {
    this.api.trigger("signal_8F135");
  }

  signal_8F135(_, el) {
    if (
      this.api.listenerTypes().includes("click") &&
      this.api.listenerTypes().includes("input")
    ) {
      el.innerHTML = "ok";
    }
  }
};
