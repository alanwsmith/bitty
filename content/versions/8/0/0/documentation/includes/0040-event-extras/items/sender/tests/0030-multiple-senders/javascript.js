window.ClassADBC5 = class {
  bittyReady() {
    document.querySelector("#id-ADBC5").click();
  }

  signal_ADBC5(ev, el) {
    if (ev.sender.dataset.needle === "value_ADBC5") {
      el.innerHTML = "ok";
    }
  }

  signal_ADBC5_2(ev, el) {
    if (ev.sender.dataset.needle === "value_ADBC5-2") {
      el.innerHTML = "ok";
    }
  }

  signal_ADBC5_3(ev, el) {
    if (ev.sender.dataset.needle === "value_ADBC5-3") {
      el.innerHTML = "ok";
    }
  }
};
