

signal_81AA3(_, el) {
  const subs = {
    "TARGET_81AA3": [
      // this.renderFragment(`replacement1_81AA3`),
      // this.renderFragment(`replacement2_81AA3`),
    ],
  };
  el.replaceWith(
    this.renderElement("el_81AA3", subs),
  );
}


bittyReady() {
  this.createElement("el_81AA3", `<div>TARGET_81AA3</div>`);
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
