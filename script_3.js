console.log("This is script_3.js")

function pyramid() {
  number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
  for(let index=1; index<=number; index++){
    console.log(" ".repeat(number-index) + "#".repeat(index));
  }
}

pyramid();
