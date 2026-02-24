signal_390C9(_, el) {
   const jsonString = `{ "status": "test passed" }`;
   this.createJSON("el_390C9", jsonString);
   el.innerHTML = this.json.el_390C9.status;
}
