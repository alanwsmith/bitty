export const bitty = {};

export async function verify_signal_35510(_, __, ___) {
  const pattern = /won't change on click/;
  const checkEls = bitty.qsa("[data-r~=signal_35510]");
  checkEls.forEach((checkEl) => {
    if (checkEl.innerHTML === "todo") {
      checkEl.dataset.testStatus = 1;
    } else {
      const match = checkEl.innerHTML.match(pattern);
      if (match !== null) {
        checkEl.dataset.testStatus = 0;
      } else {
        checkEl.dataset.testStatus = 2;
      }
    }
  });
}
