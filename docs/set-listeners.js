// deno-fmt-ignore-file

export default class {

  $sawMouse(el, data) {
    el.innerHTML = `${data.type} at ${Date.now()}`;
  }

}
