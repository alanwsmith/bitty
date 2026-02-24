#key = "el_signal_317AA";

signal_317AA(_, el) {
  const subs = {
    "TARGET_317AA": ["o", "k"],
  };
  el.replaceWith(
    this.renderElement("el_317AA", subs),
  );
}


bittyReady() {
  this.createElement("el_317AA", `<div class="test">TARGET_317AA</div>`);
  this.trigger("signal_317AA");
}