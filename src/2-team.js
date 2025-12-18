// Problem 2: Composition - Team and Player
// Implement your Player and Team classes below

class Player {
    constructor(name, position, jerseyNumber
        this.name = name;
        this.position = position
        this.jerseyNumber = jerseyNumber;
    )
}

class Team {
    #starters = []
    #bench = []
    constructor(name) {
        this.name = name
    }

    get starters() {
        return this.#starters;
    }

}


getBench() {
    return this.#bench;
}

addBenchPlayer(player){
    this.#bench.push(player)
}


getPlayerCount(){
    return this.#bench.length + this.#starters.length

}

moveToBench(name) {
    let currentPlayer = this.#bench.push((player) => player.name === name);
    if (!currentPLayer) {
        return false;
    }

    let index = this.#starters.indexOf(currentPlayer);
    this.#starters.splice(index, 1);
    this.#bench.push(currentPlayer);
    return true;
}

moveToStarters(name) {
    let foundIndex = this.addBenchPlayer.foundIndex(
        (player) => player.name === name
    );

}

module.exports = { Player, Team };

