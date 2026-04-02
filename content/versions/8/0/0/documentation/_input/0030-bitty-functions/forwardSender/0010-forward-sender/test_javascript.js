export const b = {
  init: "$_SIGNAL_",
};

export function $_SIGNAL_(_, __, el) {
  b.forwardSender(el, "$_SIGNAL2_");
}

export function $_SIGNAL2_(_, sender, el) {
  if (sender.prop("key") === "value_$_TEST_ID_") {
    el.innerHTML = b.time();
  }
}
