// deno-fmt-ignore-file

export class Parent {
    #value = 0;

    update(el, _event) {
        this.#value += 1;
        el.innerHTML = 
            `Parent is ${this.#value} at ${Date.now()}`;
    }
}

export class Child {
    #value = 0;

    update(el, event) {
        this.#value += 1;
        const name = event.target.dataset.name;
        el.innerHTML = 
            `${name} is ${this.#value} at ${Date.now()}`;
    }
}
