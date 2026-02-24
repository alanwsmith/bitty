$SIGNAL_NAME(_, el) {  
  this.createElement("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.createFragment(
    `replacement_$HASH`,
    `<div class="test">test passed</div><div class="test">test passed</div>`,
  );
  const subs = {
    "TARGET_$HASH": this.renderFragment(`replacement_$HASH`),
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}
