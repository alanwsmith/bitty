bittyReady() {
  const testSender = document.querySelector(".$CLICK_CLASS").click();
}

$SIGNAL_NAME(_, el) {
  // set to `bug` here since this
  // signal should not fire.
  el.innerHTML = "bug";
}