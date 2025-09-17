export class Parent {
    update(event, el) {
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
