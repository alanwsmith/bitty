const state = {
  value: 0,
};

export default class {
  update(event, element) {
    state.value += 1;
    element.innerHTML = `Latest value seen: ${state.value}`;
  }
}
