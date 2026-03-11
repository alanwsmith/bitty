export const b = {};

export function signal_0AF4D_v1(ev, sender, el) {
  console.warn(
    `EXPECTED ERROR 0AF4D_v1: The JSON parsing error for 0AF4D_v1 is expected. It confirms an error is sent to the console when JSON fails to parse from b.restore()`,
  );

  const result = b.restore("invalid_signal_0AF4D_v1");
  if (result === undefined) {
    el.innerHTML = b.time();
  }
}
