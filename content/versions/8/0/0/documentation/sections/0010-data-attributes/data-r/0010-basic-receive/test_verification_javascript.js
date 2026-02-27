export const bitty = {};

export async function verify_signal_E9FCA(_, __, ___) {
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_E9FCA]");
  checkEls.forEach((checkEl) => {
    const match = checkEl.innerHTML.match(pattern);
    if (match !== null) {
      checkEl.dataset.testStatus = "ok";
    } else {
      checkEl.dataset.testStatus = "issue";
    }
  });
}
