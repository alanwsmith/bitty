export const b = {};

export async function run_$_SIGNAL_() {
  await b.sleep(200);
  b.qs("[data-s~=$_SIGNAL_]").click();
  await b.sleep(300);
  b.trigger("verify_$_SIGNAL_");
  b.trigger("verify_$_SIGNAL2_");
}
