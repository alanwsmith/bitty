export const b = {
  init: "addStyles",
};

export function addStyles() {
  const css = `
:root {
  --brightest: #fff;
  --bright: #757580;
  --positive: #0a0;
}

[role="switch"] {  
  padding: 0;
  width: 2.6rem;
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
}`;
}
