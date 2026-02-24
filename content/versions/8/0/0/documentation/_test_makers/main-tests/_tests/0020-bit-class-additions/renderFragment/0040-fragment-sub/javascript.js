#key = "fragment_$SIGNAL_NAME";

$SIGNAL_NAME(_, el) {
  // const template = document.createElement("template");
  // template.innerHTML = "<div></div><div>ok</div>";
  // const subs = {
  //   "TARGET_$HASH": template.content,
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.firstChild.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}
