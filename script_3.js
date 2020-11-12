

  let nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

  function createStage(nbr) {
    for (let index = 1; index <= nbr; index++) {
      console.log(" ".repeat(nbr-index) + "#".repeat(index));
    }
  }
  
  createStage(nbr);
















/*


let num = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
  
  function displayPyramid(num) {
    for (let i = 1; i <= num; ++i) {
      let str = '';
      for (let j = 1; j <= num - i; ++j) {
        str += ' ';
      }
      for (let k = 1; k <= i; ++k) {
        str += '#';
      }
      console.log(str);
    }
  }
  
  displayPyramid(num);




















nbr = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");



var truc = 1;

while (nbr > 0) {
    nbr--;
    truc++;
    console.log((" "*nbr)+("#"*truc));
}




console.log((" "*4)+("#"*1))
console.log((" "*3)+("#"*2))
console.log((" "*2)+("#"*3))
console.log((" "*1)+("#"*4))
console.log((" "*0)+("#"*5))


console.log((" "*(nbr-1))+("#"*1))
console.log((" "*(nbr-2))+("#"*2))
console.log((" "*(nbr-3))+("#"*3))
console.log((" "*(nbr-4))+("#"*4))
console.log((" "*(nbr-5))+("#"*5))


truc++
nbr-- 
console.log((" "*nbr)+("#"*truc))








*/



