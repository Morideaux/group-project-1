function shuffle(a){}

class GameShow {
    constructor(element, options ={}) {
        this.useCategoryIds = options.useCategoryIds || [];

        this.categories = [];
        this.clues = {};

        this.currentClue = null;
        this.points =0;

        this.boardElement = element.querySelector(".board");
        this.pointCountElement = element.querySelector(".score-count");
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
        this.fetchCategories();
        
        this.boardElement.addEventListener("click", event => {
            if (event.target.dataset.clueId) {
                this.handleClueClick(event);
            }
        })
        this.formElement.addEventListener("submit", event => {
            this.handleFormSubmit(event);
        })
    }
    //upates the score by taking in variable change and adding to the current score, s
    //starting at 0
    updateScore(change) {
        this.points += change;
        this.pointCountElement.textContent = this.points;
    }
    //fetches the categories from the api, I have yet to add the api in yet. also shuffles the
    //the clues and puts 5 of them into an array for each category.
        fetchCategories() {      
            //Fetch all of the data from the API. used a promise because without it we could potentially
            //endlessly loop.
            const categories = this.useCategoryIds.map(category_id => {
               return new Promise((resolve, reject) => {
                  fetch(//instert api here)
                    .then(response => response.json()).then(data => {
                        resolve(data);
                     });
               });
            });
        Promise.all(categories).then(results => {
            results.forEach((category, categoryIndex) =>{
                var newCategory = {
                    title: category.title,
                    clues: []
                }

                var clues = shuffle(result.clues).splice(0,5).forEach((clue,index) => {
                    var clueId = categoryIndex + "-" + index;
                    newCategory.clues.push(clueId);

                    this.clues[cluesId] = {
                        question: clue.question,
                        answer: clue.answer,
                        value: (index + 1) * 100
                    }
                })

                this.categories.push(newCategory);
            })
            this.categories.foreEach(c => {
                this.renderCategory(c);
            })
        })
    }

    //this is incomplete and will need help on the html side but it is rendering each category
    renderCategory(category) {      
        let column = document.createElement("div");
        column.classList.add("column");
        column.innerHTML = (
           `<header>${category.title}</header>
           <ul>
           </ul>`
        ).trim();
        
        var ul = column.querySelector("ul");
        category.clues.forEach(clueId => {
           var clue = this.clues[clueId];
           ul.innerHTML += `<li><button data-clue-id=${clueId}>${clue.value}</button></li>`
        })
        
        //Add to DOM
        this.boardElement.appendChild(column);
     }
  
     updateScore(change) {
        this.score += change;
        this.scoreCountElement.textContent = this.score;
     }

    //This will handle when the numbers on the board are clicked on and has event listners.
    handleClueClick(event){
        var clue = this.clues[event.target.dataset.clueId];

        //Mark this button as used
        event.target.classList.add("used");

        //Update current Clue
        this.currentClue = clue;

        //Update the text
        this.currentClue = clue;

        //Update the text
        this.clueTextElement.textContent = this.currentClue.question;
        this.resultTextElement.textContent = this.currentClue.question;

        //Hide the result
        this.modalElement.classList.remove("showing-result");

        //show the modal
        this.modalElement.classList.add("visible");
        this.HTMLInputElement.focus();
    }

    revealAnswer(isCorrect) {
        //Show the individual succes/fail case
        this.successTextElement.style.display = isCorrect ? "block" : "none";
        this.failTextElement.style.display = !isCorrect ? "block" : "none";

        //show the whole result container
        this.modalElement.classList.remove("visible");

        //Disappear after a short bit
        setTimeout(() => {
            this.modalElement.classList.remove("visible");
        }, 3000);
    }
    

    //submits answer to the apis.
    handleFormSubmit(event) {
        event.preventDefault();

        var isCorrect = this.inputElement.value === this.currentClue.answer;
        if (isCorrect) {
            this.updateScore(this.currentClue.value)
        }
        //shows answer
        this.revealAnswer(isCorrect);
    }


var game = new GameShow(document.querySelector(".app"),{});
game.initGame();