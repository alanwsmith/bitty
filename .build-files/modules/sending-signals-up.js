export class Parent {
  demoSendingFromChildToParent(_event, element) {
    element.innerHTML = Date.now();
  }
}

export class Child {
  // must exist, but no methods required
}
