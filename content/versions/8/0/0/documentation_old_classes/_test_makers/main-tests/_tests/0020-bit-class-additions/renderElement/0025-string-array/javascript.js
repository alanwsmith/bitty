$SIGNAL_NAME(_, el) {
  this.createElement("el_$HASH", `<div class="test">TARGET_$HASH</div>`);
  const subs = {
    "TARGET_$HASH": ["test ", "passed"],
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}
