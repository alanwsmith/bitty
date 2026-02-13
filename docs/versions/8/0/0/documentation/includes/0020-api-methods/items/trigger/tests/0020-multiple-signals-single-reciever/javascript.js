window.Class91BD2 = class {
  bittyReady() {
    this.api.trigger(`
      signal_91BD2 
      signal_91BD2_2
      signal_91BD2_3
    `);
  }

  signal_91BD2(_, el) {
    el.innerHTML = "alfa";
  }

  signal_91BD2_2(_, el) {
    el.innerHTML = `${el.innerHTML}-bravo`;
  }

  signal_91BD2_3(_, el) {
    if (el.innerHTML === `alfa-bravo`) {
      el.innerHTML = "ok";
    }
  }
};
