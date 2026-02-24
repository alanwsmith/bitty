

signal_F7F0A(_, el) {
  const subs = {
    "TARGET_F7F0A": [
      this.renderElement(`replace1_F7F0A`),
      this.renderElement(`replace2_F7F0A`),
    ],
  };
  el.replaceWith(
    this.renderElement("el_F7F0A", subs),
  );
}


bittyReady() {
  this.createElement("el_F7F0A", `<div>TARGET_F7F0A</div>`);
  this.createElement(`replace1_F7F0A`, `<div class="test">ok</div>`);
  this.createElement(`replace2_F7F0A`, `<div class="test">ok</div>`);
  this.trigger("signal_F7F0A");
}