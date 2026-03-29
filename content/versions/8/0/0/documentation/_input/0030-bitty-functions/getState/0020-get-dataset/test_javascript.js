export const b = {};

export function $_SIGNAL_(_, __, el) {
  b.config.getState.dataset.push("key");
  const pageState = b.getState();
  for (const stateEl of pageState) {
    if (
      stateEl.id === "target_$_TEST_ID_" &&
      stateEl.dataset.key === "value_$_TEST_ID_"
    ) {
      el.innerHTML = b.time();
    }
  }
}
