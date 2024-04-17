const superposition = 'opentdb.com/api.php?amount=5&category=';
//this is the same no matter the quiery
 

const level = event.target.this.button;
// this is intended to get the text of the cell that contains the button.
    


const type = 'multiple' {
 if 'cell value' > 100;
 else = 'boolean'}
 //makes the type for any 100 question boolean

 const category = event.target.parentNode.parentNode.StaticText
 //may need to rearrange the html to make the cells cillderen of their respective catagory

 // or use catagory id. added when the function is called? so, on button push, thats a lot of buttons giving each button a class per may be faster

switch.level { // level setting as a switch
    case 1:
        500 or 400 = 'Hard'
        break;

    default:
        break;
    case 2:
        300 or 200 = 'medium'
        break;
    case 3:
        100 = 'easy'
        break;
}; 

this.button.onclick = function() {
  'https://' + superposition + category + '&difficulty=' + level + '&' + type;
}
// function that concatinates the link for the api fetch on button push.