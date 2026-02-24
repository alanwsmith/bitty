

signal_00B6E(_, el) {
  const subs = {
    "TARGET_00B6E": this.renderFragment(`replacement_00B6E`),
  };
  el.replaceWith(
    this.renderElement("el_00B6E", subs),
  );
}


bittyReady() {
  this.createElement("el_00B6E", `<div>TARGET_00B6E</div>`);
  this.createFragment(
    `replacement_00B6E`,
    `<div class="test">ok</div><div class="test">ok</div>`,
  );
  this.trigger("signal_00B6E");
}