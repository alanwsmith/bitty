export const b = { init: "init_$_TEST_ID_" };

export function init_$_TEST_ID_(_, __, el) {
  const subs = {
    __STATE__: "true",
    __S__: "$_SIGNAL_",
  };
  el.replaceWith(b.switch(subs));
}

export function $_SIGNAL_(_, sender, el) {
  const newState = sender.getAttribute("aria-checked") === "true"
    ? "false"
    : "true";
  sender.setAttribute("aria-checked", newState);
  el.innerHTML = b.time();
}
