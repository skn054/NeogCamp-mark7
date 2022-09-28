var input = document.querySelector(".input");
var button = document.querySelector(".translate-button");
var output = document.querySelector(".output");

var serverUrl = "https://api.funtranslations.com/translate/doge.json";


function constructUrl(text) {
  return serverUrl + "?" + "text=" + text;

}

function errorHandler(error){
  console.log("error"+ error);
  alert("Something went wrong! Try after sometime");
}

function clickHandler() {
  console.log("Inside Click Handler")
  var userInput = input.value;
  fetch(constructUrl(userInput))
    .then((response) => response.json())
    .then((data) => {
        output.classList.remove('output-error');
        var outputResponse = data.contents.translated;
        output.innerText = outputResponse;
      }
    )
    .catch(errorHandler);
}
console.log('before click handler')
button.addEventListener('click', clickHandler);
