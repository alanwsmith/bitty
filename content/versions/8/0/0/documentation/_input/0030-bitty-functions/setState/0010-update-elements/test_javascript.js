export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  console.log(b.getState());
  const payload = [
    { id: "target_$_TEST_ID_", ariaHidden: true },
  ];
  b.setState(payload);
  const checkEl = b.qs("#target_$_TEST_ID_");
  if (checkEl.ariaHidden === true) {
    el.innerHTML = b.time();
  }
}
