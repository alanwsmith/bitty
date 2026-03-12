window.SingleSender = class {
  singleSignal(_event, el) {
    el.innerHTML = Math.random();
  }
}