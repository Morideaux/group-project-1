function shuffle(a){}

class GameShow {
    constructor(element, options ={}) {
        this.useCategoryIds = options.useCategoryIds || [];

        this.categories = [];
        this.clues = {};

        this.currentClue = null;
        this.score =0;

        this.boardElement = element.querySelector(".board");
        this.scoreCountElement = element.querySelector(".score-count");
        this.formElement = element.querySelector("form");
        this.inputTrueOrFalse = element.querySelector("input");
        this.modalElement = element.querySelector(".card-modal");
        this.resultElement = element.querySelector("result");
        this.resultTextElement = element.querySelector("result_correct-answer-text");
        this.successTextElement = element.querySelector(".result_sucess");
        this.failTextElement = element.querySelector(".result_fail");

    }
    initGame(){
        this.updateScore();
    }
    updateScore(change) {
        this.score += change;
        this.scoreCountElement.textContent = this.score;
    }
}

const = game new GameShow(document.querySelector(".app"),{})
game.initGame();