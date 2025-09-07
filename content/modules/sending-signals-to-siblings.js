export class Parent {
    update(el, event) {
        if (el.dataset.name === event.target.dataset.name) {
            el.innerHTML = "HERE"
        } else {
            el.innerHTML = "----"
        }
    }
}

export class Child {
    // class must exist but doesn't need anything
}
