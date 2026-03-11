signal_317AA(_, el) {
  this.createElement("el_317AA", `<div class="test">TARGET_317AA</div>`);
  const subs = {
    "TARGET_317AA": ["test ", "passed"],
  };
  el.replaceWith(
    this.renderElement("el_317AA", subs),
  );
}
