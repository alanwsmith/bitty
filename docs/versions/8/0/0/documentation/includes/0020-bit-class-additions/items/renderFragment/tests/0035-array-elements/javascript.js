signal_A86C1(_, el) {
  this.createFragment("fragment_A86C1", `<div>TARGET_A86C1</div>`);
  const replacementEl = document.createElement("div");
  replacementEl.innerHTML = "test passed";
  replacementEl.classList.add("test");
  const replacementEl2 = document.createElement("div");
  replacementEl2.innerHTML = "test passed";
  replacementEl2.classList.add("test");
  const replacementArray = [
    replacementEl,
    replacementEl2,
  ];
  const subs = {
    "TARGET_A86C1": replacementArray,
  };
 el.replaceWith(this.renderFragment("fragment_A86C1", subs));
}

