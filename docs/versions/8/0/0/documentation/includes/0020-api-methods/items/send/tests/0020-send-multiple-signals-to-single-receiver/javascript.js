window.ClassE22AA = class {
  bittyReady() {
    this.api.send(
      { status: "ok" },
      `signal_E22AA signal_E22AA_2 signal_E22AA_3`,
    );
  }

  signal_E22AA(ev, el) {
    el.innerHTML = `alfa-${ev.payload.status}`;
  }

  signal_E22AA_2(ev, el) {
    el.innerHTML = `${el.innerHTML}-bravo-${ev.payload.status}`;
    console.log(el.innerHTML);
  }

  signal_E22AA_3(ev, el) {
    if (ev.payload.status === "ok" && el.innerHTML === "alfa-ok-bravo-ok") {
      el.innerHTML = "ok";
    }
  }
};
