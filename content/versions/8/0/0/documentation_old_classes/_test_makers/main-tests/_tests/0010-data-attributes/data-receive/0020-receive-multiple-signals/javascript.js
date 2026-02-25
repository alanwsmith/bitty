$SIGNAL_NAME(_, el) {
  this.message = ["test"];
  el.innerHTML = "caught button 1";
}

$SIGNAL2_NAME(_, el) {
  this.message.push("passed");
  el.innerHTML = "caught button 2";
}

$SIGNAL3_NAME(_, el) {
  el.innerHTML = this.message.join(" ");
}
