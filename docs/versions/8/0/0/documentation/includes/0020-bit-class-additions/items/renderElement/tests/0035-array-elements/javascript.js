signal_F7F0A(_, el) {
  this.createElement("el_F7F0A", `<div>TARGET_F7F0A</div>`);
  this.createElement(`replace1_F7F0A`, `<div class="test">test passed</div>`);
  this.createElement(`replace2_F7F0A`, `<div class="test">test passed</div>`);
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
