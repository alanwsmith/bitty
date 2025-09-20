export class Parent {
  update(event, element) {
    if (element.dataset.uuid === event.target.dataset.uuid) {
      element.innerHTML = "HERE";
    } else {
      element.innerHTML = "----";
    }
  }
}

export class Child {
  // must exist but no methods required
}
