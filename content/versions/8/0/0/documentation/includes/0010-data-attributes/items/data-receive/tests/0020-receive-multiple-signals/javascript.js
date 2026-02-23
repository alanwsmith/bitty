signal_CBE64(_, el) {
  this.message = ["test"];
  el.innerHTML = "caught button 1";
}

signal_CBE64_2(_, el) {
  this.message.push("passed");
  el.innerHTML = "caught button 2";
}

signal_CBE64_3(_, el) {
  el.innerHTML = this.message.join(" ");
}
