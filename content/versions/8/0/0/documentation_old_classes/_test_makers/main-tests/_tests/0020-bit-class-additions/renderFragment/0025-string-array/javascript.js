$SIGNAL_NAME(_, el) {
  this.createFragment("fragment_$HASH", `<div></div><div class="test">TARGET_$HASH</div>`);
  const subs = {
    "TARGET_$HASH": ["test ", "passed"],
  };
 el.replaceWith(this.renderFragment("fragment_$HASH", subs));
}
