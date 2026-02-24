

signal_F7489(_, el) {
  // const template = document.createElement("template");
  // template.innerHTML = "<div></div><div>ok</div>";
  // const subs = {
  //   "TARGET_F7489": template.content,
  // };
  // const fragment = this.renderFragment("el_F7489", subs);
  // el.innerHTML = fragment.firstChild.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_F7489");
}

given_signal_F7489(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_F7489", `<div>TARGET_F7489</div>`);
  this.trigger("signal_F7489");
}
