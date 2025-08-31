// deno-fmt-ignore-file

const templates = {
  display: `<div>Display</div>`,
  previousButton: `<button 
data-name="previous"
data-call="previous" 
data-send="update"
data-receive="update"></button>`,
  nextButton: `<button 
data-name="next"
data-call="next" 
data-send="update"
data-receive="update">Next</button>`,
  animalsPerPage: `<div>Animals Per Page:
<select data-call="changeDistance" data-send="update">
<option value="5">5</option>
<option value="10" selected>10</option>
<option value="20">20</option>
</select>`,
  pages: `<div data-receive="update">
Pages
</div>`
};


export default class {
  constructor() {
    this.animals = null;
    this.animalsPerPage = 10;
    this.firstAnimal = 0;
    this.templates = this.loadTemplates();
  }

  loadTemplates() {
    return Object.fromEntries(
      Object.entries(templates).map(([k,v]) => {
        const template = document.createElement("template");
        template.innerHTML = v;
        return [k, template]
      })
    );
  }

  loadAnimals(el) {
    if (this.animals === null) {
      const animalEls = el.querySelectorAll("li");
      this.animals = [...animalEls].map(
        (animal) => animal.innerHTML
      );
    }
  }

  loadLayout(el) {
    el.replaceChildren(this.templates["display"].content.cloneNode(true));
    el.appendChild(this.templates["previousButton"].content.cloneNode(true));
    el.appendChild(this.templates["nextButton"].content.cloneNode(true));
    el.appendChild(this.templates["animalsPerPage"].content.cloneNode(true));
    el.appendChild(this.templates["pages"].content.cloneNode(true));

  }

  init(el, _event) {
    this.loadAnimals(el);
    this.loadLayout(el);
  }

  // #firstAnimal = 0;
  // #distance = 10;

  // changeDistance(event) {
  //     if (event.type === "input") {
  //         this.animalsPerPage = parseInt(event.target.value, 10);
  //     }
  // }

  // currentPage() {
  //     return 1 + Math.floor(this.firstAnimal / this.animalsPerPage);
  // }

  // goToPage(event) {
  //     const targetPage = parseInt(event.target.dataset.page, 10);
  //     this.firstAnimal = (targetPage - 1) * this.animalsPerPage;
  // }

  next(_event) {
      if (this.firstAnimal + this.animalsPerPage < this.animals.length) {
          this.firstAnimal = Math.min(this.animals.length, this.firstAnimal + this.animalsPerPage);
      }
  }

  // previous(_event) {
  //     this.firstAnimal = Math.max(0, this.firstAnimal - this.animalsPerPage);
  // }

  // setPageButtonDataset(el, buttonNumber) {
  //     el.dataset.page = buttonNumber;
  //     el.dataset.call = "goToPage";
  //     el.dataset.send = "update";
  // }

  // setPageButtonText(el, buttonNumber) {
  //     el.innerHTML = this.currentPage() === buttonNumber ? "-" : buttonNumber;
  // }

  // totalPages() {
  //     return Math.ceil(this.animals.length / this.animalsPerPage);
  // }

  // update(el, _event) {
  //     if (el.dataset.name === "display") {
  //         this.updateDisplay(el);
  //     } 
  //     if (el.dataset.name === "next") {
  //         this.updateNext(el);
  //     }
  //     if (el.dataset.name === "pages") {
  //         this.updatePageButtons(el);
  //     } 
  //     if (el.dataset.name === "previous") {
  //         this.updatePrevious(el);
  //     } 
  // }

  // updateDisplay(el) {
  //     const lastAnimalIndex = Math.min(this.animals.length, this.firstAnimal + this.animalsPerPage);
  //     const pageAnimals = [];
  //     for (let animalIndex =  this.firstAnimal; animalIndex < lastAnimalIndex; animalIndex += 1) {
  //         pageAnimals.push(list[animalIndex]);
  //     }
  //     el.innerHTML = pageAnimals.join(" ");
  // }

  // updateNext(el) {
  //     if (this.firstAnimal + this.animalsPerPage < this.animals.length) {
  //         el.innerHTML = "Next";
  //         el.dataset.send = "update";
  //     } else {
  //         el.innerHTML = "-";
  //         delete el.dataset.send;
  //     }
  //  }

  // updatePageButtons(el) {
  //     el.innerHTML = "";
  //     for (let buttonNumber = 1; buttonNumber <= this.totalPages(); buttonNumber ++) {
  //         const pageButton = document.createElement("button");
  //         this.setPageButtonText(pageButton, buttonNumber);
  //         this.setPageButtonDataset(pageButton, buttonNumber);
  //         pageButton.classthis.animals.add("page-button");
  //         el.appendChild(pageButton);
  //     }
  //  }

  //  updatePrevious(el) {
  //     if (this.firstAnimal - this.animalsPerPage >= 0) {
  //         el.innerHTML = "Previous";
  //         el.dataset.send = "update";
  //     } else {
  //         el.innerHTML = "-";
  //         delete el.dataset.send;
  //     }
  //  }



}
