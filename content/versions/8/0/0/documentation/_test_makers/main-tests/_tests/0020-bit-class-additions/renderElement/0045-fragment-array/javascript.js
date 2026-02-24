$SIGNAL_NAME(_, el) {
  this.createElement("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.createFragment(
    `replacement1_$HASH`,
    `<div class="test">test passed</div><div class="test">test passed</div>`,
  );
  this.createFragment(
    `replacement2_$HASH`,
    `<div class="test">test passed</div><div class="test">test passed</div>`,
  );
  const subs = {
    "TARGET_$HASH": [
      this.renderFragment(`replacement1_$HASH`),
      this.renderFragment(`replacement2_$HASH`),
    ],
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}
