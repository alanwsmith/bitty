async $SIGNAL_NAME(_, el) {
  const fallback = "<div></div><div>test passed</div>";
  const url = "/intentionally-missing-file.html";
  await this.fetchFragment("el_$HASH", url, fallback);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}
