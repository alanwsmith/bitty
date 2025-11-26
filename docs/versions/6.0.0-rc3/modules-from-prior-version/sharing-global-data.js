const state = {
  value: 0,
};

export default class {
  globalDataExample(event, element) {
    if (element.dataset.uuid === event.target.dataset.uuid) {
      state.value += 1;
      element.innerHTML = `Latest value seen: ${state.value}`;
    }
  }
}
