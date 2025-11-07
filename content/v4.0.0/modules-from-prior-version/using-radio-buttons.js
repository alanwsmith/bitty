export default class {
    updateFromRadioButtons(event, element) {
        element.innerHTML = `Selected: ${event.target.value}`;
    }
}

