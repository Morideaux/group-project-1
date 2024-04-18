/*
the following chunk of varibles are in place to feth the relevant information so a string concatination
can be formed that functions with the Trivia API.
superposition is to set the initial link followinng that the other
varibles are to determin what type of question
will be called by the function based on grid position and value.
*/
const superposition = 'opentdb.com/api.php?amount=5&category=';
let point = this.textcontent;
const h1Elements = document.querySelectorAll('h1');
const categoryH1Texts = [];
let buttonId = this.id
let type = (point > 100) ? "multiple":"boolean";
let categoryCollumn = buttonId.substring(0, 2);

if (h1Elements.id.startswith('category')) {
    categoryH1Texts.push(h1Elements.textcontent)
};
//
function setCategory(categoryCollumn) {
      let category;
 switch (categoryCollumn) {
    case "1_": {
        category = categoryH1Texts[0]
    };
    break;
    case "2_": {
        category = categoryH1Texts[1]
    };
    break;
    case "3_": {
        category = categoryH1Texts[2]
    };
    break;
    case "4_": {
        category = categoryH1Texts[3]
    };
    break;
    case "5_": {
        category = categoryH1Texts[4]
    };
    break;
    case "6_": {
        category = categoryH1Texts[5]
    };
    break;

}
 };
// sets level using a switch statement based upon the value of the cell
 function setLevel(point) {
    let level;
 switch (point) {
    case 500:
    case 400: {
         level = ('Hard')
        };
        break;
    case 300:
    case 200: {
        level = ('medium') 
        } 
        break;
    case 100: {
        level = ('easy')
        }
        break;
    default: 'Unknown';
}
    return level;
};

// this function is the end result after setting the varibles
function summonQuestion() {
  'https://' + superposition + category + '&difficulty=' + level + '&' + type;
};

 const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', function () {
        summonQuestion();
    });
});




 

