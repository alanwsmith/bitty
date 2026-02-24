#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const subs = {
    "TARGET_$HASH": [
      // this.renderFragment(`replacement1_$HASH`),
      // this.renderFragment(`replacement2_$HASH`),
    ],
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}


bittyReady() {
  this.createElement("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.createFragment(
    `replacement1_$HASH`,
    `<div class="test">ok</div><div class="test">ok</div>`,
  );
  this.createFragment(
    `replacement2_$HASH`,
    `<div class="test">ok</div><div class="test">ok</div>`,
  );
  this.trigger("$SIGNAL_NAME");
}
