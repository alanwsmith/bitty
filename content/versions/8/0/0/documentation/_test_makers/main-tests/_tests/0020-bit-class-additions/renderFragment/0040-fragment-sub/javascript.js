$SIGNAL_NAME(_, el) {
  this.createFragment("fragment_$HASH", `<div>TARGET_$HASH</div>`);
  const template = document.createElement("template");
  template.innerHTML = `<div></div><div class="test">test passed</div>`;
  const subs = {
    "TARGET_$HASH": template.content,
  };
 el.replaceWith(this.renderFragment("fragment_$HASH", subs));
}


