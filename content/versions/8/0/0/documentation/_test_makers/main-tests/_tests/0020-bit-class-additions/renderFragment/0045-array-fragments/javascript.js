$SIGNAL_NAME(_, el) {
  this.createFragment("fragment_$HASH", `<div>TARGET_$HASH</div>`);
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">test passed</div><div class="test">test passed</div>`;
  const template2 = document.createElement("template");
  template2.innerHTML = `<div class="test">test passed</div><div class="test">test passed</div>`;
  const replacementArray = [
    template.content,
    template2.content,
  ];
  const subs = {
    "TARGET_$HASH": replacementArray,
  };
 el.replaceWith(this.renderFragment("fragment_$HASH", subs));
}
