export const b = {
  init: "makeToggles",
  templates: {
    toggleSwitch: `<label data-key="__KEY__">
<button class="toggle-snippet" data-s="__SEND__" role="switch" aria-checked="__STATE__">
  <span class="toggle-snippet-label"></span>
  <span class="toggle-snippet-position"></span>
</button> __LABEL__<label>`,
  },
};

let toggles;

export function makeToggles() {
  toggles = b.loadPage("toggles", {});
  b.qsa("span.toggle-enhancement").forEach((el) => {
    const subs = {
      __KEY__: el.dataset.key,
      __LABEL__: el.dataset.label,
      __SEND__: el.dataset.s,
      __STATE__: toggles[el.dataset.key] ? "true" : "false",
    };
    el.replaceWith(b.render("toggleSwitch", subs));
  });
}

export function ping(_, sender, __) {
  const newState = sender.getAttribute("aria-checked") === "true"
    ? false
    : true;
  sender.setAttribute("aria-checked", newState);
  toggles[sender.prop("key")] = newState;
  b.savePage("toggles", toggles);
}
