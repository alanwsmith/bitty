// deno-fmt-ignore-file

export default class {
    #value = null;

    update(el, event) {
        if (event.target.nodeName === "BITTY-JS") {
            const checkEl = document.querySelector(
                "[name=using-radio-buttons]:checked"
            );
            this.#value = checkEl.value;
        } else {
            this.#value = event.target.value;
        }
        el.innerHTML = `Current Selection: ${this.#value}`;
    }
}

