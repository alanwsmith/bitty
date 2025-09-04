// deno-fmt-ignore-file

export default class {
  update(el, event) {
    if (event.target.value !== "") {
      el.innerHTML = event.target.value;
    }
  }
}

