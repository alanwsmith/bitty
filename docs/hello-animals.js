// deno-fmt-ignore-file

export class Wires {
  #data = {
    "animal": 0,
    "animals": [
      "Bearcat",
      "Dolphin",
      "Hippopotamus",
      "Opossum",
      "Rhinoceros",
    ],
  };

  _switchAnimal(data) {
    this.#data.animal = data.target.value;
  }

  $showAnimal(el, _) {
    const animal = this.#data.animal;
    el.innerHTML = this.#data.animals[animal];
  }

  template() {
    return `
<div>
  Hello: <span data-r="showAnimal"></span>
</div>

<input type="range" value="0"
  min="0"  max="4"  step="1"
  data-c="switchAnimal" data-s="showAnimal"
>
`;
  }
}
