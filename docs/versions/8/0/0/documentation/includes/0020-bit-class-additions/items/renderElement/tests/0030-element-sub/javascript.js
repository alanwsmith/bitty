#key = "el_signal_AB8CB";

signal_AB8CB(_, el) {
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


bittyReady() {
  this.createElement("el_AB8CB", `<div>TARGET_AB8CB</div>`);
  this.trigger("signal_AB8CB");
}