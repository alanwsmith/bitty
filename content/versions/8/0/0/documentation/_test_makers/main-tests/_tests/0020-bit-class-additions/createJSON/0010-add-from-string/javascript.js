$SIGNAL_NAME(_, el) {
   const jsonString = `{ "status": "ok" }`;
   this.createJSON("el_$HASH", jsonString);
   el.innerHTML = this.json.el_$HASH.status;
}
