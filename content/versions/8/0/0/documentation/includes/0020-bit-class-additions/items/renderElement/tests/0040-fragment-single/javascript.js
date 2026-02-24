signal_00B6E(_, el) {  
  this.createElement("el_00B6E", `<div>TARGET_00B6E</div>`);
  this.createFragment(
    `replacement_00B6E`,
    `<div class="test">test passed</div><div class="test">test passed</div>`,
  );
  const subs = {
    "TARGET_00B6E": this.renderFragment(`replacement_00B6E`),
  };
  el.replaceWith(
    this.renderElement("el_00B6E", subs),
  );
}
