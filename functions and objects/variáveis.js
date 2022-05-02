
/*------ VARIÁVEIS ------*/

// CONST - Uma vez definida, não pode ser alterada

// LET - Variável de escopo de bloco, possui um escopo menor do que var!

function logScope() {
  const localVar = 2;

  if (localVar) {
    let localvarLet = 3
    console.log("localvar aninhada", localvarLet);
  }
  console.log("logScope localvar", localVar);
}
let localvarLet = 2
console.log("localvar aninhada", localvarLet);
logScope();