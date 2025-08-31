// deno-fmt-ignore-file

export default class {
  update(el, _event) {
    el.innerHTML = `Default Class at ${Date.now()}`;
  }
}

export class AlternativeClass {
  update(el, _event) {
    el.innerHTML = `Alternative Class at ${Date.now()}`;
  }
}