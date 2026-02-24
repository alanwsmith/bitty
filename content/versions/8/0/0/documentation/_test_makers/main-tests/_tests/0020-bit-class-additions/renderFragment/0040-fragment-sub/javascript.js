

$SIGNAL_NAME(_, el) {
  // const template = document.createElement("template");
  // template.innerHTML = "<div></div><div>ok</div>";
  // const subs = {
  //   "TARGET_$HASH": template.content,
  // };
  // const fragment = this.renderFragment("el_$HASH", subs);
  // el.innerHTML = fragment.firstChild.children[1].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}
