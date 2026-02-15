window.ClassE22AA = class {
  bittyReady() {
    this.api.send(
      { status: "ok" },
      `
      signal_E22AA 
      signal_E22AA_2
      signal_E22AA_3
    `,
    );
  }

  signal_E22AA(payload, el) {
    el.innerHTML = `alfa-${payload.status}`;
  }

  signal_E22AA_2(payload, el) {
    el.innerHTML = `${el.innerHTML}-bravo-${payload.status}`;
    console.log(el.innerHTML);
  }

  signal_E22AA_3(payload, el) {
    if (payload.status === "ok" && el.innerHTML === "alfa-ok-bravo-ok") {
      el.innerHTML = "ok";
    }
  }
};
