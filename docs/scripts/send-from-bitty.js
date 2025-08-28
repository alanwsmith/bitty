// deno-fmt-ignore-file

export default class {
  update(el, _event) {
    el.innerHTML = `Got update at ${Date.now()}`;
  }
}
