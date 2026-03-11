export const b = {
  init: "initialize_$_SIGNAL_",
};

export function initialize_$_SIGNAL_() {
  b.addListener("event_$_SIGNAL_", "$_SIGNAL_");
}

export function $_SIGNAL_(ev, sender, el) {
  el.innerHTML = b.time();
}
