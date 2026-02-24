#key = "el_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  const replacementEl = document.createElement("div");
  replacementEl.classList.add("test");
  replacementEl.innerHTML = "test passed";
  const subs = {
    "TARGET_$HASH": replacementEl,
  };
  el.replaceWith(
    this.renderElement("el_$HASH", subs),
  );
}


bittyReady() {
  this.createElement("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}