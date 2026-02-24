#key = "el_signal_81AA3";

signal_81AA3(_, el) {
  const subs = {
    "TARGET_81AA3": [
      // this.renderFragment(`replacement1_81AA3`),
      // this.renderFragment(`replacement2_81AA3`),
    ],
  };
  el.replaceWith(
    this.renderElement(this.#key, subs),
  );
}


bittyReady() {
  this.createElement(this.#key, `<div>TARGET_81AA3</div>`);
  this.createFragment(
    `replacement1_81AA3`,
    `<div class="test">ok</div><div class="test">ok</div>`,
  );
  this.createFragment(
    `replacement2_81AA3`,
    `<div class="test">ok</div><div class="test">ok</div>`,
  );
  this.trigger("signal_81AA3");
}
