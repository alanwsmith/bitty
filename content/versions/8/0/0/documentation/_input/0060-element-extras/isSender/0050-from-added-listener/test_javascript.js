export const b = {};

export function init_$_TEST_ID_() {
  b.addListener("event_$_TEST_ID_", "$_SIGNAL_");
}

export function $_SIGNAL_(ev, sender, el) {
  if (el.isSender() === false) {
    el.innerHTML = b.time();
  }
}
