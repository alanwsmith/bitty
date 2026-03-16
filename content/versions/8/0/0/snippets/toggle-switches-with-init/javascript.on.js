export const b = { init: "addStyles initSwitches" };

let data;

export function initSwitches(_, __, el) {
  const defaults = { alfa: false, bravo: false, charlie: false, delta: false };
  data = b.loadPage("state", defaults);
  el.replaceChildren(
    ...Object.keys(data).map((key) => {
      const subs = {
        __KEY__: key,
        __STATE__: `${data[key]}`, // TODO: Update so `true` can be passed without making it a string.
        __DISPLAY__: data[key] ? "on" : "off",
      };
      return b.render("toggleWrapper", subs);
    }),
  );
}

export function toggle(_, sender, el) {
  if (sender.prop("key") === el.prop("key")) {
    const newState = sender.getAttribute("aria-checked") === "true"
      ? false
      : true;
    sender.setAttribute("aria-checked", newState);
    el.innerHTML = newState ? "on" : "off";
    data[sender.prop("key")] = newState;
    b.savePage("state", data);
  }
}

export function addStyles() {
  b.addStyles(`
:root {
  --brightest: #fff;
  --bright: #757580;
  --positive: #0a0;
}

[role="switch"] {  
  padding: 0;
  width: 3.4rem;
  height: 1.5rem;
  border: 0;
  border-radius: 1rem;
  background-color: var(--bright);
}

[role="switch"][aria-checked="true"] {
  background-color: var(--positive);
}

[role="switch"] span {
  color: var(--brightest);
  padding: 0.1rem;  
  pointer-events: none;
  border-radius: 2rem;
}

[role="switch"][aria-checked="false"] :last-child {
  padding-left: .2em;
}

[role="switch"][aria-checked="true"] :last-child,[role="switch"][aria-checked="false"] :first-child {
  background: var(--brightest);
}`);
}
