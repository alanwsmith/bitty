export const b = {};

export function $_SIGNAL_(ev, sender, el) {
  console.warn(
    `EXPECTED ERROR $_TEST_ID_: The JSON parsing error for $_TEST_ID_ is expected. It confirms an error is sent to the console when JSON fails to parse from b.restore()`,
  );

  const result = b.restore("invalid_$_SIGNAL_");
  if (result === undefined) {
    el.innerHTML = b.time();
  }
}
