signal_C23DC(_, el) {
  // This does not fire because a click
  // event is not one of the listeners.
  el.innerHTML = "test failed ";
}
