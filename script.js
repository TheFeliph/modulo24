class Functionary {
    constructor(name ) {
        this._name = this._capitalize(name);
    }

    set name(string) {
        this._name = this._capitalize(string);
    }

    get name() {
        return this._name;
    }

    _capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
    }

}

class Developer extends Functionary {
    constructor(name, codeLanguage) {
        super(name);
        this.codeLanguage = codeLanguage;
    }

    code() {
        return `${this._name} está codando em ${this.codeLanguage}`

    }
}

class Designer extends Functionary {
    constructor(name, editores) {
        super(name);
        this.editores = editores;
    }
    code() {
        return `${this._name} está trabalhando com a ferramenta ${this.editores}`

    }
}


let felipe = new Developer('felipe', 'javaScript')
console.log(felipe.code())

let leticia = new Developer('leticia', 'html css')
console.log(leticia.code())

let elena = new Designer('elena', 'Photoshop')
console.log(elena.code())

let carou = new Designer('felipe', 'Sketch')
console.log(carou.code())
