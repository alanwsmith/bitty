bittyReady() {
  this.trigger(`
    $SIGNAL_NAME 
    $SIGNAL2_NAME
    $SIGNAL3_NAME
  `);
}

$SIGNAL_NAME(_, el) {
  el.innerHTML = "alfa";
}

$SIGNAL2_NAME(_, el) {
  el.innerHTML = `$${el.innerHTML}-bravo`;
}

$SIGNAL3_NAME(_, el) {
  if (el.innerHTML === `alfa-bravo`) {
    el.innerHTML = "ok";
  }
}