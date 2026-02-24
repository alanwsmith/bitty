async signal_80552(_, el) {
  const fallback = document.createElement("template");
  fallback.innerHTML = `<div class="test">test passed</div>`;
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_80552", url, fallback.content);
  console.log(this.renderFragment("el_80552"));
  el.replaceWith(this.renderFragment("el_80552"));
}
