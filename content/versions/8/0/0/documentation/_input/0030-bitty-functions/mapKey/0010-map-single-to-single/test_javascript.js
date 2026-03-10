export const b = {
  init: "setKey_$_SIGNAL_",
};

export function setKey_$_SIGNAL_() {
  b.mapKey("q", "$_SIGNAL_");
}

export function $_SIGNAL_(_, __, el) {
  el.innerHTML = b.time();
}
