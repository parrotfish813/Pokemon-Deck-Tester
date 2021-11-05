//Holds the information for the deck itself
class Deck {

    //Constructor that declares the variable
    constructor(cards) {
        this.cards = cards;
    }

}

//Holds the information for the cards
class Card {

    //Constructor that declares the variable
    constructor(type, health) {

        //What type the pokemon is
        this.type = type;

        //How much health the pokemon has
        this.health = health;
    }

}