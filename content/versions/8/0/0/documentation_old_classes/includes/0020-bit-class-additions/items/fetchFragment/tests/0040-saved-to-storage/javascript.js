async signal_0CCFB(_, el) {  
  const url = "/[@ file.parent @]/payloads/valid-fragment.xml";
  await this.fetchFragment("el_0CCFB", url);
  delete this._fragment["el_0CCFB"];
  this.loadFragment("el_0CCFB");
  el.innerHTML = this.renderFragment("el_0CCFB").children[1].innerHTML;
}
