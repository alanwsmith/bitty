$SIGNAL_NAME(_, el) {
   const jsonString = `{ "status": "test passed" }`;
   this.createJSON("el_$HASH", jsonString);
   el.innerHTML = this.json.el_$HASH.status;
}
