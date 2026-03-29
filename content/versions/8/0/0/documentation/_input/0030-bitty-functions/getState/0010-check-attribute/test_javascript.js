export const b = {};

export function $_SIGNAL_(_, __, el) {
  const pageState = b.getState();
  for (const savedValues of pageState) {
    if (savedValues.id === "target_$_TEST_ID_") {
      if (
        savedValues.value === "value_$_TEST_ID_" &&
        savedValues.ariaHidden === "false"
      ) {
        el.innerHTML = b.time();
      }
    }
  }
}
