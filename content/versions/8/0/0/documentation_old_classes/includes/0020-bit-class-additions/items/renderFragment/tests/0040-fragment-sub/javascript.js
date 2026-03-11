signal_F7489(_, el) {
  this.createFragment("fragment_F7489", `<div>TARGET_F7489</div>`);
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div class="test">test passed</div>`;
  const subs = {
    "TARGET_F7489": template.content,
  };
 el.replaceWith(this.renderFragment("fragment_F7489", subs));
}


