// deno-fmt-ignore-file

const list = [
    "Albatross","Alligator","Alpaca","Ant","Antelope","Ape","Armadillo","Baboon","Badger","Bat","Bear","Beaver","Bee","Beetle","Binturong","Boar","Bobcat","Bull","Butterfly","Camel","Cardinal","Cat","Cattle","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Cobra","Cockroach","Cod","Cormorant","Cow","Crab","Crane","Crocodile","Crow","Deer","Dog","Dogfish","Dolphin","Donkey","Dove","Duck","Dunlin","Eagle","Echidna","Eel","Elephant","Elk","Emu","Falcon","Ferret","Finch","Flamingo","Fly","Fox","Frog","Gecko","Gerbil","Giant Panda","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goosander","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Guinea Fowl","Guinea Pig","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hyena","Jaguar","Jay","Jellyfish","Junglefowl","Kangaroo","Kingbird","Kinkajou","Koala","Ladybug","Lapwing","Lark","Lemur","Leopard","Lion","Lizard","Llama","Lobster","Locust","Lyrebird","Mallard","Meerkat","Mole","Mongoose","Monkey","Moose","Mosquito","Moth","Mouse","Narwhal","Newt","Nightingale","Octopus","Opossum","Otter","Ox","Owl","Oyster","Panther","Panda","Partridge","Peafowl","Peccary","Pelican","Penguin","Pheasant","Pig","Pigeon","Platypus","Polar Bear","Pony","Porcupine","Prairie Dog","Pug","Quail","Rabbit","Raccoon","Ram","Rat","Raven","Rhinoceros","Rook","Salamander","Salmon","Sand Dollar","Sandpiper","Sardine","Seahorse","Seal","Sea Otter","Shark","Sheep","Skunk","Snail","Snake","Spider","Spoonbill","Squid","Squirrel","Starfish","Starling","Stingray","Swan","Termite","Thrush","Tiger","Toad","Toucan","Turkey","Turtle","Viper","Wallaby","Wapiti","Wasp","Weasel","Whale","Wildebeest","Wolf","Wombat","Zebra"
];


export default class {
    #firstAnimal = 0;
    #distance = 10;

    changeDistance(event) {
        if (event.type === "input") {
            this.#distance = parseInt(event.target.value, 10);
        }
    }

    currentPage() {
        return 1 + Math.floor(this.#firstAnimal / this.#distance);
    }

    goToPage(event) {
        const targetPage = parseInt(event.target.dataset.page, 10);
        this.#firstAnimal = (targetPage - 1) * this.#distance;
    }

    next(_event) {
        if (this.#firstAnimal + this.#distance < list.length) {
            this.#firstAnimal = Math.min(list.length, this.#firstAnimal + this.#distance);
        }
    }

    previous(_event) {
        this.#firstAnimal = Math.max(0, this.#firstAnimal - this.#distance);
    }

    setPageButtonDataset(el, buttonNumber) {
        el.dataset.page = buttonNumber;
        el.dataset.call = "goToPage";
        el.dataset.send = "update";
    }

    setPageButtonText(el, buttonNumber) {
        el.innerHTML = this.currentPage() === buttonNumber ? "-" : buttonNumber;
    }

    totalPages() {
        return Math.ceil(list.length / this.#distance);
    }

    update(el, _event) {
        console.log(`Updating: ${Date.now()}`);
        if (el.dataset.name === "display") {
            this.updateDisplay(el);
        } 
        if (el.dataset.name === "next") {
            this.updateNext(el);
        }
        if (el.dataset.name === "pages") {
            this.updatePageButtons(el);
        } 
        if (el.dataset.name === "previous") {
            this.updatePrevious(el);
        } 
    }

    updateDisplay(el) {
        const lastAnimalIndex = Math.min(list.length, this.#firstAnimal + this.#distance);
        const pageAnimals = [];
        for (let animalIndex =  this.#firstAnimal; animalIndex < lastAnimalIndex; animalIndex += 1) {
            pageAnimals.push(list[animalIndex]);
        }
        el.innerHTML = pageAnimals.join(" ");
    }

    updateNext(el) {
        if (this.#firstAnimal + this.#distance < list.length) {
            el.innerHTML = "Next";
            el.dataset.send = "update";
        } else {
            el.innerHTML = "-";
            delete el.dataset.send;
        }
     }

    updatePageButtons(el) {
        el.innerHTML = "";
        for (let buttonNumber = 1; buttonNumber <= this.totalPages(); buttonNumber ++) {
            const pageButton = document.createElement("button");
            this.setPageButtonText(pageButton, buttonNumber);
            this.setPageButtonDataset(pageButton, buttonNumber);
            pageButton.classList.add("page-button");
            el.appendChild(pageButton);
        }
     }

     updatePrevious(el) {
        if (this.#firstAnimal - this.#distance >= 0) {
            el.innerHTML = "Previous";
            el.dataset.send = "update";
        } else {
            el.innerHTML = "-";
            delete el.dataset.send;
        }
     }
}
