signal_AB8CB(_, el) {
  this.createElement("el_AB8CB", `<div>TARGET_AB8CB</div>`);
  const replacementEl = document.createElement("div");
  replacementEl.classList.add("test");
  replacementEl.innerHTML = "test passed";
  const subs = {
    "TARGET_AB8CB": replacementEl,
  };
  el.replaceWith(
    this.renderElement("el_AB8CB", subs),
  );
}
