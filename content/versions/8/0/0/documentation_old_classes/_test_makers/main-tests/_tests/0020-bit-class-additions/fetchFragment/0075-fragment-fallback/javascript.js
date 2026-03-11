async $SIGNAL_NAME(_, el) {
  const fallback = document.createElement("template");
  fallback.innerHTML = `<div class="test">test passed</div>`;
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_$HASH", url, fallback.content);
  el.replaceWith(this.renderFragment("el_$HASH"));
}
