var radio_brasileiro = document.getElementById("rdb_brasileiro");
var radio_estrangeiro = document.getElementById("rdb_estrangeiro");
var estudante = document.getElementById("cbx_estudante");
var nome = document.getElementById("txt_nome");
var email = document.getElementById("txt_email");
var cpf = document.getElementById("txt_cpf");
var identificacao_estudantil = document.getElementById("txt_identificacao_estudantil");
var logradouro = document.getElementById("txt_logradouro");
var numero = document.getElementById("txt_numero");
var complemento = document.getElementById("txt_complemento");
var bairro = document.getElementById("txt_bairro");
var cidade = document.getElementById("txt_cidade");
var estado = document.getElementById("txt_estado");
var uf = document.getElementById("txt_uf");
var cep = document.getElementById("txt_cep");
var empresa = document.getElementById("txt_empresa");
var cargo = document.getElementById("txt_cargo");
var area_atuacao = document.getElementById("txt_area_atuacao");
var valor_ingresso = document.querySelector("valor_ingresso");
radio_brasileiro.checked = true;
valor_ingresso.innerText = "400";
function isNascionalidade() {
    if (radio_brasileiro.checked) {
        radio_estrangeiro.checked = false;
    }
    else if (radio_estrangeiro.checked) {
        radio_brasileiro.checked = false;
    }
    if (estudante.checked == true) {
        identificacao_estudantil.classList.toggle("isVisible");
        identificacao_estudantil.required = true;
    }
    else {
        identificacao_estudantil.classList.remove("isVisible");
        identificacao_estudantil.required = false;
    }
}
function enviar() {
    console.log(nome.value);
    console.log(email.value);
    console.log(cpf.value);
    console.log(identificacao_estudantil.value);
    console.log(logradouro.value);
    console.log(numero.value);
    console.log(complemento.value);
    console.log(bairro.value);
    console.log(cidade.value);
    console.log(estado.value);
    console.log(uf.value);
    console.log(cep.value);
    console.log(empresa.value);
    console.log(cargo.value);
    console.log(area_atuacao.value);
}
