export const bitty = {};

export async function verify_signal_9E5B8_2(_, __, el) {
  const checkValue = bitty.qs("[data-r~=signal_9E5B8]").innerHTML;
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const match = checkValue.match(pattern);
  if (match !== null) {
    el.innerHTML = "ok";
  }
}

export async function verify_signal_9E5B8_3(_, __, el) {
  const checkValue = bitty.qs("[data-r~=signal_9E5B8]").innerHTML;
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const match = checkValue.match(pattern);
  if (match !== null) {
    el.innerHTML = "ok";
  }
}
