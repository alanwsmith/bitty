#key = "svg_signal_D68A0";

test_signal_D68A0(_, el) {
  // this.logs = [];
  // this.renderSVG(this.#key);
  // if (this.logs[0].ok === false && this.logs[0].level === "error") {
  //   el.innerHTML = "ok";
  // }
}


bittyReady() {
  this.setLocalLogLevel("none");
  this.deleteSVG(this.#key);
  this.trigger("test_signal_D68A0");
}
