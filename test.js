window.onload = sendAPiRequest




async function sendAPiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=1&type=multiple`);
    console.log(response);
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data){
    document.querySelector("#questionSlot").innerHTML =  `Question: ${data.results[0].question}`

    document.querySelector("#answer1").innerHTML =  data.results[0].correct_answer
    document.querySelector("#answer2").innerHTML =  data.results[0].incorrect_answers[0]
    document.querySelector("#answer3").innerHTML =  data.results[0].incorrect_answers[1]
    document.querySelector("#answer4").innerHTML =  data.results[0].incorrect_answers[2]
    
}

let correctButton = document.querySelector('answer1')

correctButton.addEventListener("click",()=>{
    alert("Correct")
    sendAPiRequest
})

}

