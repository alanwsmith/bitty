$SIGNAL_NAME(_, el) {
  const jsonObject = JSON.parse(`{ "status": "test passed" }`);
  this.createJSON("el_$HASH", jsonObject);
  console.log(this.json.el_$HASH);
  el.innerHTML = this.json.el_$HASH.status;
}

