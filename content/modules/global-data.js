const globalState = {
    value: 0
}

export class Parent {
    update(el, _event) {
        el.innerHTML = 
            `Value: ${globalState.value}`;
    }
}

export class Child {
    decrement(_event) {
        globalState.value -= 1;
    }

    increment(_event) {
        globalState.value += 1;
    }
}
