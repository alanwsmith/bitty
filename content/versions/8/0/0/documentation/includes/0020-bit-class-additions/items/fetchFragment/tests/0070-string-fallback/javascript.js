async signal_F3B99(_, el) {
  this.setLocalLogLevel("none");
  const fallback = "<div></div><div>test passed</div>";
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_F3B99", url, fallback);
  el.innerHTML = this.renderFragment("el_F3B99").children[1].innerHTML;
}
