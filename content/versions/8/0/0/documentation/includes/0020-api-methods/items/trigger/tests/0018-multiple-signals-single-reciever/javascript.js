window.ClassE6FBE = class {
  bittyReady() {
    this.api.trigger(`
      signal_E6FBE 
      signal_E6FBE_2
      signal_E6FBE_3
    `);
  }

  signal_E6FBE(_, el) {
    el.innerHTML = "alfa";
  }

  signal_E6FBE_2(_, el) {
    el.innerHTML = `${el.innerHTML}-bravo`;
  }

  signal_E6FBE_3(_, el) {
    if (el.innerHTML === `alfa-bravo`) {
      el.innerHTML = "ok";
    }
  }
};
