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

  author(_event, element) {
    element.innerHTML = `Author: ${this.#books[this.#bookType].author}`;
  }

  pages(_event, element) {
    element.innerHTML = `Pages: ${this.#books[this.#bookType].pages}`;
  }

  setType(event, _element) {
    this.#bookType = event.target.dataset.type;
  }

  title(_event, element) {
    element.innerHTML = `Title: ${this.#books[this.#bookType].title}`;
  }
}
