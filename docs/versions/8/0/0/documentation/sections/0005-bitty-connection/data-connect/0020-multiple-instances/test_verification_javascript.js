export const bitty = {};

export async function verify_signal_A2EB2(_, __, el) {
  const checkValue = bitty.qs("[data-r~=signal_A2EB2]").innerHTML;
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const match = checkValue.match(pattern);
  if (match !== null) {
    el.innerHTML = "ok";
  }
}

export async function verify_signal_A2EB2_2(_, __, el) {
  const checkValue = bitty.qs("[data-r~=signal_A2EB2_2]").innerHTML;
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const match = checkValue.match(pattern);
  if (match !== null) {
    el.innerHTML = "ok";
  }
}
