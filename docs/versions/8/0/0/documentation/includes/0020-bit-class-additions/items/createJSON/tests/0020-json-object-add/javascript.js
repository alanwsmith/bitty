signal_6A436(_, el) {
  const jsonObject = JSON.parse(`{ "status": "test passed" }`);
  this.createJSON("el_6A436", jsonObject);
  el.innerHTML = this.json["el_6A436"].status;
}
