export const bitty = {};

export function bar() {
  return "x";
}

export function foo() {
  console.log(`this is foo: and ${bitty.ping2()}`);
}

export function test1(ev, sender, el) {
  el.innerHTML = `got test - ${bitty.ping2()}`;
}
