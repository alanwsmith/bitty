export const b = { init: "addStyles" };

export function toggleSnippet(_, sender, el) {
  const newStatus = sender.getAttribute("aria-checked") === "true"
    ? false
    : true;
  sender.setAttribute("aria-checked", newStatus);
  el.innerHTML = newStatus ? "on" : "off";
}

export function addStyles() {
  b.addStyles(`
:root {
  --toggle-off: #778;
  --toggle-on: #0a0;
  --toggle-text: white;
}

[role="switch"] {  
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

[role="switch"]:hover {  
  border: 1px solid var(--toggle-text);
  color: var(--toggle-text);
}

[role="switch"][aria-checked="true"]  {
  background-color: var(--toggle-on);
}

.switch-label:after,
.switch-label:before {
  position: absolute;
  top: 50%;
  transform: translateY(-53%);
}

.switch-position:after,
.switch-position:before {
  border-radius: 1rem;
  height: 1rem;
  width: 1rem;
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

[role="switch"][aria-checked="true"] .switch-label:before {
  content: "on";
  left: 0.35rem;
}

[role="switch"][aria-checked="true"] .switch-position:before{
  background: var(--toggle-text);
  right: 0.25rem;
}

[role="switch"][aria-checked="false"] .switch-label:after {
  content: "off";
  right: 0.35rem;
}

[role="switch"][aria-checked="false"] .switch-position:after {
  background: var(--toggle-text);
  left: 0.25rem;
}`);
}