async signal_80552(_, el) {
  this.setLocalLogLevel("none");
  const fallback = document.createElement("template");
  fallback.innerHTML = `<div class="test">test passed</div>`;
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_80552", url, fallback.content);
  el.replaceWith(this.renderFragment("el_80552"));
}
