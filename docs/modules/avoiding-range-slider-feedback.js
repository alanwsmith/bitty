export default class {
  updateSliderFeedback(event, element) {
    if (element.dataset.uuid !== event.target.dataset.uuid) {
      element.value = event.target.value;
    }
  }
}
