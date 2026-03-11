signal_81AA3(_, el) {
  this.createElement("el_81AA3", `<div>TARGET_81AA3</div>`);
  this.createFragment(
    `replacement1_81AA3`,
    `<div class="test">test passed</div><div class="test">test passed</div>`,
  );
  this.createFragment(
    `replacement2_81AA3`,
    `<div class="test">test passed</div><div class="test">test passed</div>`,
  );
  const subs = {
    "TARGET_81AA3": [
      this.renderFragment(`replacement1_81AA3`),
      this.renderFragment(`replacement2_81AA3`),
    ],
  };
  el.replaceWith(
    this.renderElement("el_81AA3", subs),
  );
}
