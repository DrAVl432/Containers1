class Team {
    constructor() {
        this.members = new Set();
    }

    // Метод add добавляет персонажа в команду
    add(character) {
        if (this.members.has(character)) {
            throw new Error('Персонаж уже добавлен в команду.');
        }
        this.members.add(character);
    }

    // Метод addAll добавляет произвольное количество персонажей в команду
    addAll(...characters) {
        characters.forEach(character => this.members.add(character));
    }

    // Метод toArray конвертирует Set в массив
    toArray() {
        return Array.from(this.members);
    }
}

export default  Team;