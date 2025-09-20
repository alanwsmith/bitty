export class Parent {
  update(_event, el) {
    el.innerHTML = Date.now();
  }
}

export class Child {
  // This class must exist for
  // the connection but doesn't
  // need anything in it
}
