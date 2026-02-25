async $SIGNAL_NAME(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment("el_$HASH", url);
  el.innerHTML = this.renderFragment("el_$HASH").children[1].innerHTML;
}