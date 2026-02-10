const version = [8, 0, 0];

const tagName = `bitty-${version[0]}-${version[1]}`;

class BittyJs extends HTMLElement {
}

customElements.define(tagName, BittyJs);
