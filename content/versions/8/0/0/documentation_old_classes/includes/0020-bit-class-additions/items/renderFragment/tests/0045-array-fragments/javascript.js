signal_C24F9(_, el) {
  this.createFragment("fragment_C24F9", `<div>TARGET_C24F9</div>`);
  const template = document.createElement("template");
  template.innerHTML = `<div class="test">test passed</div><div class="test">test passed</div>`;
  const template2 = document.createElement("template");
  template2.innerHTML = `<div class="test">test passed</div><div class="test">test passed</div>`;
  const replacementArray = [
    template.content,
    template2.content,
  ];
  const subs = {
    "TARGET_C24F9": replacementArray,
  };
 el.replaceWith(this.renderFragment("fragment_C24F9", subs));
}
