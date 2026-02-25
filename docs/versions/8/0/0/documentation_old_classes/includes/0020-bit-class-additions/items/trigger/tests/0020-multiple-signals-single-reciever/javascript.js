bittyReady() {
  this.trigger(`
    signal_86215 
    signal_86215_2
    signal_86215_3
  `);
}

signal_86215(_, el) {
  el.innerHTML = "alfa";
}

signal_86215_2(_, el) {
  el.innerHTML = `${el.innerHTML}-bravo`;
}

signal_86215_3(_, el) {
  if (el.innerHTML === `alfa-bravo`) {
    el.innerHTML = "test passed";
  }
}