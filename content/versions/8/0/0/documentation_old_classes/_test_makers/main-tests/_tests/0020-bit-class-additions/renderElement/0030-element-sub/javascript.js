$SIGNAL_NAME(_, el) {
  this.createElement("el_$HASH", `<div>TARGET_$HASH</div>`);
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
