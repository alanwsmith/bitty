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
  --toggle-off: #778;
  --toggle-on: #0a0;
  --toggle-text: white;
}

.toggle-snippet {  
  background-color: var(--toggle-off);
  border: 1px solid rgb(255 255 255 / 0);
  border-radius: 1rem;
  color: var(--toggle-text);
  height: 1.2rem;
  padding: 0;
  position: relative;
  transform: translateY(0.25rem);
  width: 3.1rem;
}

.toggle-snippet:hover {  
  border: 1px solid var(--toggle-text);
  color: var(--toggle-text);
}

.toggle-snippet[aria-checked="true"]  {
  background-color: var(--toggle-on);
}

.toggle-snippet-label:after,
.toggle-snippet-label:before {
  position: absolute;
  top: 50%;
  transform: translateY(-53%);
}

.toggle-snippet-position:after,
.toggle-snippet-position:before {
  border-radius: 1rem;
  height: 1rem;
  width: 1rem;
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.toggle-snippet[aria-checked="true"] .toggle-snippet-label:before {
  content: "on";
  left: 0.35rem;
}

.toggle-snippet[aria-checked="true"] .toggle-snippet-position:before{
  background: var(--toggle-text);
  right: 0.25rem;
}

.toggle-snippet[aria-checked="false"] .toggle-snippet-label:after {
  content: "off";
  right: 0.35rem;
}

.toggle-snippet[aria-checked="false"] .toggle-snippet-position:after {
  background: var(--toggle-text);
  left: 0.25rem;
}`);
}
