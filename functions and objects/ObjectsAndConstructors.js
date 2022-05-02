/*-------OBJETOS-------*/

var curso = new Object();

curso.titulo = "Javascript";
curso.instrutora = "Amanda";
curso.nivel = "1";
curso.dataDePublicacao = false;
curso.numeroDeVisualizações = 0;


var curso = {
  titulo: "Javascript",
  instrutora: "Amanda",
  nivel: "1",
  dataDePublicacao: false,
  numeroDeVisualizações: 0,
  atualizaNumeroDeVisualizações: function() {
    return ++curso.numeroDeVisualizações;
  }
} 

console.log(curso);


/*------------------------------------------------------------------*/


/*-------Construtores de objetos-------*/


function Curso(titulo,instrutora,nivel,dataDePublicacao,numeroDeVisualizações,atualizaNumeroDeVisualizações) {
  this.titulo = titulo;
  this.instrutora = instrutora;
  this.dataDePublicacao = dataDePublicacao;
  this.numeroDeVisualizações = numeroDeVisualizações;
  this.atualizaNumeroDeVisualizações = function () {
    return ++curso.numeroDeVisualizações;
  };
}

var cursos = [
  new Curso("js", "formacao basica", "amanda", 1, false, 0),
  new Curso("js", "formacao basica", "amanda", 1, true, 123123123123)
]

//[""] - converte propriedade do objeto para string

/*------------------------------------------------------------------*/