// deno-fmt-ignore-file

export default class {
  update(el, _event) {
    el.innerHTML = `Default Class at ${Date.now()}`;
  }
}

export class ExtraClass {
  update(el, _event) {
    el.innerHTML = `Extra Class at ${Date.now()}`;
  }
}