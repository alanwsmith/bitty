signal_3ECFF(_, el) {
  this.createElement("el_3ECFF", `<div class="test">TARGET_3ECFF</div>`);
  const subs = {
    "TARGET_3ECFF": "test passed",
  };
  el.replaceWith(
    this.renderElement("el_3ECFF", subs),
  );
}
