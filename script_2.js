console.log("This is script_2.js")


function factorielle() {
  let number = prompt("De quel nombre veut tu calculer la factorielle ?")
  for(let index = number-1; index >= 1; index--){
    number = number * index
  }
  console.log(`Le résultat est : ${number}`);
}

factorielle();
