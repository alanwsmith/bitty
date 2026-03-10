export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  const checkValue = b.data["data_$_SIGNAL_"].key_$_SIGNAL_;
  if (checkValue === "value_$_SIGNAL_") {
    el.innerHTML = b.time();
  }
}
