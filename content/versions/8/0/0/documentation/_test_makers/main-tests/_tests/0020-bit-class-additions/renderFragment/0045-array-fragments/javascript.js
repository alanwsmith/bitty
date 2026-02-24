

$SIGNAL_NAME(_, el) {
  // const template = document.createElement("template");
  // template.innerHTML = "<div></div><div></div>";
  // const template2 = document.createElement("template");
  // template2.innerHTML = "<div></div><div>ok</div>";
  // const replacementArray = [
  //   template.content,
  //   template2.content,
  // ];
  // const subs = {
  //   "TARGET_$HASH": replacementArray,
  // };
  // const fragment = this.renderFragment("el_$HASH", subs);
  // el.innerHTML = fragment.firstChild.children[3].innerHTML;
}


bittyReady() {
  this.trigger("given_$SIGNAL_NAME");
}

given_$SIGNAL_NAME(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment("el_$HASH", `<div>TARGET_$HASH</div>`);
  this.trigger("$SIGNAL_NAME");
}
