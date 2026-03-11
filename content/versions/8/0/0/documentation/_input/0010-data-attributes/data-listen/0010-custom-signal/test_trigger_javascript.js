export const b = {};

export async function run_$_SIGNAL_() {
  await b.sleep(200);
  const event_$_SIGNAL_ = new KeyboardEvent("keydown", {
    key: "a",
    bubbles: true,
    cancelable: true,
  });
  b.qs("[data-s~=$_SIGNAL_]").dispatchEvent(event_$_SIGNAL_);
  await b.sleep(300);
  b.trigger("verify_$_SIGNAL_");
}
