

signal_C24F9(_, el) {
  // const template = document.createElement("template");
  // template.innerHTML = "<div></div><div></div>";
  // const template2 = document.createElement("template");
  // template2.innerHTML = "<div></div><div>ok</div>";
  // const replacementArray = [
  //   template.content,
  //   template2.content,
  // ];
  // const subs = {
  //   "TARGET_C24F9": replacementArray,
  // };
  // const fragment = this.renderFragment(this.#key, subs);
  // el.innerHTML = fragment.firstChild.children[3].innerHTML;
}


bittyReady() {
  this.trigger("given_signal_C24F9");
}

given_signal_C24F9(_, __) {
  this.setLocalLogLevel("none");
  this.createFragment(this.#key, `<div>TARGET_C24F9</div>`);
  this.trigger("signal_C24F9");
}
