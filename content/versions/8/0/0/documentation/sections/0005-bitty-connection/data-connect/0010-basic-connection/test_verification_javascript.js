export const bitty = {};

export async function verify_signal_B1D0F(_, __, ___) {
  const pattern = /\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d/;
  const checkEls = bitty.qsa("[data-r~=signal_B1D0F]");
  checkEls.forEach((checkEl) => {
    const match = checkEl.innerHTML.match(pattern);
    if (match !== null) {
      checkEl.dataset.testStatus = "ok";
    } else {
      checkEl.dataset.testStatus = "issue";
    }
  });
}
