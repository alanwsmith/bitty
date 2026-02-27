export const bitty = {};

export async function verify_signal_7B23F(_, __, el) {
  const checkValue = bitty.qs("[data-r~=signal_7B23F]").innerHTML;
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const match = checkValue.match(pattern);
  if (match !== null) {
    el.innerHTML = "ok";
  }
}
