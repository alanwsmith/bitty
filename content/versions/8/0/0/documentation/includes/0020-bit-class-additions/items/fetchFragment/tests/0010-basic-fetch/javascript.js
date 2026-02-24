async signal_E47B8(_, el) {
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment("el_E47B8", url);
  el.innerHTML = this.renderFragment("el_E47B8").children[1].innerHTML;
}