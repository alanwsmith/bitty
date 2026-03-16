export const b = { init: "addStyles" };

export function toggleSnippet(_, sender, el) {
  console.log("toggling");
  const isOn = sender.getAttribute("aria-checked") === "true" ? true : false;
  sender.setAttribute("aria-checked", isOn ? false : true);
}

export function addStyles() {
  b.addStyles(`
:root {
  --brightest: #fff;
  --bright: #757580;
  --positive: #0a0;
}

button [role="switch"] {  
  padding: 0;
  width: 1rem;
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