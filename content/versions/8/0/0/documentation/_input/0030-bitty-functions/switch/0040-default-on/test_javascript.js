export const b = { init: "init_$_TEST_ID_" };

export function init_$_TEST_ID_(_, __, el) {
  const subs = {
    __STATE__: "true",
    __SEND__: "$_SIGNAL_",
  };
  el.replaceWith(b.switch(subs));
}

export function $_SIGNAL_(_, sender, el) {
  sender.setAria("checked", !sender.ariaAsBool("checked"));
  el.innerHTML = b.time();
}
