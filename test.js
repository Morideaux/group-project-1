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
}