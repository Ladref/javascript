console.log("This is script_7.js")

function bot() {
  sentence = prompt("Please, tell me what is on your mind?")
  if(sentence.slice(-1) === "?") {
    console.log("Ouais ouais...");
  } else if (sentence !== "" && sentence === sentence.toUpperCase()) {
    console.log("Pwa, calme-toi...")
  } else if ((sentence.indexOf("fortnite") !== -1) || (sentence.indexOf("Fortnite") !== -1)) {
    console.log("on s' fait une partie soum-soum ?");
  } else if (sentence === "") {
    console.log("T'es en PLS?")
  } else {
    console.log("balek.")
  }
}


bot();
