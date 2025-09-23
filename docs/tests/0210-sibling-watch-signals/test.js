export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }
}

export class Child {
  runWatchTestAlfa(event, element) {
    console.log(event);
    // element.innerHTML = "PASSED";
  }
}
