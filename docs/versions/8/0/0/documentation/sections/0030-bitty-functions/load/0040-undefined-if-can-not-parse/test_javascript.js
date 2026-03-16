export const b = {};

export function signal_616DA_v1(ev, sender, el) {
  console.warn(
    `EXPECTED ERROR 616DA_v1: The JSON parsing error for 616DA_v1 is expected. It confirms an error is sent to the console when JSON fails to parse from b.load()`,
  );

  const result = b.load("invalid_signal_616DA_v1");
  if (result === undefined) {
    el.innerHTML = b.time();
  }
}
