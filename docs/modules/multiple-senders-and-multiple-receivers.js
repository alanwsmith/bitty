export default class {
  #books = {
    fiction: {
      title: "Neuromancer",
      author: "William Gibson",
      pages: 271,
    },
    nonFiction: {
      title: "On Writing",
      author: "Stephen King",
      pages: 288,
    },
  };
  #bookType = null;

  author(el, _event) {
    el.innerHTML = `Author: ${this.#books[this.#bookType].author}`;
  }

  pages(el, _event) {
    el.innerHTML = `Pages: ${this.#books[this.#bookType].pages}`;
  }

  setType(_el, event) {
    this.#bookType = event.target.dataset.type;
  }

  title(el, _event) {
    el.innerHTML = `Title: ${this.#books[this.#bookType].title}`;
  }
}
