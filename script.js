function checkEligibility (){const currentYear = new Date().getFullYear();
const birthYear = parseInt (document.getElementById('birth-year').value);
const name = document.getElementById('name').value;

const age=currentYear - birthYear;

const resultElement = document.getElementById('result');

if (age>=18) {resultElement.textContent= "Aluno (a) maior de idade, pode continuar com o cadestro";

}  else if (age>= 14 && age <18){
resultElement.textContent = "Aluno (a) deve solicitar a assinatura"
}
else if (age < 14 ){resultElement.textContent = "Só serão aceotps alunos(as) com 14 anos ou mais neste curso.";

} else {
    resultElement.textContent = "idade invalido";
}
}
