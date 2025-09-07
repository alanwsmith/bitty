export class Parent {
  init() {
    this.api.querySelector("button").click();
  }
  update(el, event) {
    el.innerHTML = `PASSED`;
  }
}

export class Child {
  // Child class must exist but update comes
  // via cascade from the Parent
}
