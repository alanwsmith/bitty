export class Parent {
  bittyInit() {
    this.api.querySelector("button").click();
  }

  runTest(_event, el) {
    console.log("TODO: 0200-...");
    // el.innerHTML = "PASSED";
  }
}

export class Child {
  // must exist, but no methods required
}
