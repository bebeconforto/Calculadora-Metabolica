


var gen;
var ativ; 
var age; 
var pes; 
var altura;

function sumirInfo(){

	gen = $("#genero").val();
	ativ = $("#atividade").val();
	age = $("#idade").val();
	pes = $("#peso").val();
	altura = $("#altura").val();
  if (gen == "M")
  {
    var pesoConta;
    var alturaConta;
    var idadeConta;

    pesoConta = 13.7 * pes;
    alturaConta = 5 * altura;
    idadeConta = 6.8 * age;

    var result = ativ * (66 + (pesoConta + alturaConta - idadeConta));

  }
  else if (gen == "F")
  {
    var pesoConta;
    var alturaConta;
    var idadeConta;

    pesoConta = 9.6 * pes;
    alturaConta = 1.8 * altura;
    idadeConta = 4.7 * age;

    var result = ativ * (665 + (pesoConta + alturaConta - idadeConta));

  }
  
  $("#resultadoCalc").html(result.toFixed(2).replace('.',','));
}

  // Taxa para homens: 66 + (13,7 x peso) + (5 x altura em cm) – (6,8 x idade);
}


