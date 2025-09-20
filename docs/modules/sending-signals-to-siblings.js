export class Parent {
  update(event, element) {
    console.log(event);
    console.log(element);
  }

  // update(event, el) {
  //   if (el.dataset.uuid === event.target.dataset.uuid) {
  //     el.innerHTML = "HERE";
  //   } else {
  //     el.innerHTML = "----";
  //   }
  // }
}

export class Child {
  // this must exist for bitty to have
  // something to connect to, but it
  // doesn't need to have anything in it
}
