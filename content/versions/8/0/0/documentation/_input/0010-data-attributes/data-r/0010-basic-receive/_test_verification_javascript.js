export const bitty = {};

export async function verify_$_SIGNAL_(_, __, el) {
  const checkValue = bitty.qs("[data-r~=$_SIGNAL_]").innerHTML;
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const match = checkValue.match(pattern);
  if (match !== null) {
    el.innerHTML = "ok";
  }
}
