export class Parent {
  runTest0360(_event, el) {
    el.innerHTML = "FAILED";
  }
}

export class Child {
  runTest0360(_event, el) {
    if (el) {
      el.innerHTML = "FAILED";
    }
  }
}
