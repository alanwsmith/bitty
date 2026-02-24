#key = "el_signal_3ECFF";

signal_3ECFF(_, el) {
  const subs = {
    "TARGET_3ECFF": "ok",
  };
  el.replaceWith(
    this.renderElement("el_3ECFF", subs),
  );
}


bittyReady() {
  this.createElement("el_3ECFF", `<div class="test">TARGET_3ECFF</div>`);
  this.trigger("signal_3ECFF");
}