export const bitty = {};

export function initialize_$_SIGNAL_() {
  bitty.addListener("event_$_SIGNAL_", "$_SIGNAL_");
}

export function $_SIGNAL_(ev, sender, el) {
  el.innerHTML = bitty.localTimestamp();
}
