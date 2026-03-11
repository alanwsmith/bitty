$SIGNAL_NAME(_, el) {
  this.createFragment("fragment_$HASH", `<div>TARGET_$HASH</div>`);
  const replacementEl = document.createElement("div");
  replacementEl.innerHTML = "test passed";
  replacementEl.classList.add("test");
  const replacementEl2 = document.createElement("div");
  replacementEl2.innerHTML = "test passed";
  replacementEl2.classList.add("test");
  const replacementArray = [
    replacementEl,
    replacementEl2,
  ];
  const subs = {
    "TARGET_$HASH": replacementArray,
  };
 el.replaceWith(this.renderFragment("fragment_$HASH", subs));
}

