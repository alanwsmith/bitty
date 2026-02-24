#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const subs = {
    "TARGET_$HASH": ["o", "k"],
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}


bittyReady() {
  this.createElement("el_$HASH", `<div class="test">TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}