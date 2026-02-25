$SIGNAL_NAME(_, el) {
  this.createFragment("el_$HASH", `<div></div><div>TARGET_$HASH</div>`);
  const subs = {
    "TARGET_$HASH": "test passed",
  };
  const fragment = this.renderFragment("el_$HASH", subs);
  el.innerHTML = fragment.children[1].innerHTML;
}
