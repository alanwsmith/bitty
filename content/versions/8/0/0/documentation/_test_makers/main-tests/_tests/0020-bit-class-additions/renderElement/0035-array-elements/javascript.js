

$SIGNAL_NAME(_, el) {
  const subs = {
    "TARGET_$HASH": [
      this.renderElement(`replace1_$HASH`),
      this.renderElement(`replace2_$HASH`),
    ],
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}


bittyReady() {
  this.createElement("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.createElement(`replace1_$HASH`, `<div class="test">ok</div>`);
  this.createElement(`replace2_$HASH`, `<div class="test">ok</div>`);
  this.trigger("$SIGNAL_NAME");
}