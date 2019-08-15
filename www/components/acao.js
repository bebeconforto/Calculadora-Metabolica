var gen;
var pes;
var altura;
var age;  
var ativ; 

$(document).on('click', '#result', function(){

	gen = $('input[name=gender]:checked').val();
	pes = $("#peso").val();
	altura = $("#altura").val();
	age = $("#idade").val();
	ativ = $("#atividade").val();
	
	var combo = gen+" ; "+pes+" ; "+altura+" ; "+age+" ; "+ativ;
	
	alert(combo);
	
	if(allFieldsAreFilled()){
		
		var pesoConta;
		var alturaConta;
		var idadeConta;
		var result;
		
		if (gen == "M")
		{
			pesoConta = 13.7 * pes;
			alturaConta = 5 * altura;
			idadeConta = 6.8 * age;

			result = ativ * (66 + (pesoConta + alturaConta - idadeConta));

		}
		
		else
		{
			pesoConta;
			alturaConta;
			idadeConta;

			pesoConta = 9.6 * pes;
			alturaConta = 1.8 * altura;
			idadeConta = 4.7 * age;

			result = ativ * (65 + (pesoConta + alturaConta - idadeConta));

		}
		
		document.getElementById('resultadoCalc').innerHTML = result.toFixed(2).replace('.',',');
		
	}else{
		alert("Fill in all the fields you dumbass!")
	}
	
});

function allFieldsAreFilled(){
	
	var resposta;
	
	if(gen != null && gen != undefined && gen != '' && gen != "" &&
	   ativ != null && ativ != undefined && ativ != '' && ativ != "" &&
	   age != null && age != undefined && age != '' && age != "" &&
	   pes != null && pes != undefined && pes != '' && pes != "" &&
	   altura != null && altura != undefined && altura != '' && altura != ""){
		   
		   resposta = true;
		   
	   }
	else{
		   resposta = false;
	}
	
	return resposta;
	
}


