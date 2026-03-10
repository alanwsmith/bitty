export const b = {};

export async function run_signal_0C853_v1() {
  await b.sleep(200);
  const event_signal_0C853_v1 = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  b.qs("[data-s~=signal_0C853_v1]").dispatchEvent(event_signal_0C853_v1);
  await b.sleep(300);
  b.trigger("verify_signal_0C853_v1");
}
