signal_31065(_, el) {
  this.createFragment("fragment_31065", `<div>TARGET_31065</div>`);
  const replacementEl = document.createElement("div");
  replacementEl.innerHTML = "test passed";
  replacementEl.classList.add("test");
  const subs = {
    "TARGET_31065": replacementEl,
  };
 el.replaceWith(this.renderFragment("fragment_31065", subs));
}
