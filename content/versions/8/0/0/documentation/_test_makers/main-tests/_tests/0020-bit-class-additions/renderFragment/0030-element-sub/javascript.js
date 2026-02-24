$SIGNAL_NAME(_, el) {
  this.createFragment("fragment_$HASH", `<div>TARGET_$HASH</div>`);
  const replacementEl = document.createElement("div");
  replacementEl.innerHTML = "test passed";
  replacementEl.classList.add("test");
  const subs = {
    "TARGET_$HASH": replacementEl,
  };
 el.replaceWith(this.renderFragment("fragment_$HASH", subs));
}
