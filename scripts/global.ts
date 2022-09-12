const radio_brasileiro = <HTMLInputElement>document.getElementById("rdb_brasileiro");
const radio_estrangeiro = <HTMLInputElement>document.getElementById("rdb_estrangeiro");
const estudante = <HTMLInputElement>document.getElementById("cbx_estudante");

const nome = <HTMLInputElement>document.getElementById("txt_nome");
const email = <HTMLInputElement>document.getElementById("txt_email");
const cpf = <HTMLInputElement>document.getElementById("txt_cpf");
const identificacao_estudantil = <HTMLInputElement>document.getElementById("txt_identificacao_estudantil");
const logradouro = <HTMLInputElement>document.getElementById("txt_logradouro");
const numero = <HTMLInputElement>document.getElementById("txt_numero");
const complemento = <HTMLInputElement>document.getElementById("txt_complemento");
const bairro = <HTMLInputElement>document.getElementById("txt_bairro");
const cidade = <HTMLInputElement>document.getElementById("txt_cidade");
const estado = <HTMLInputElement>document.getElementById("txt_estado");
const uf = <HTMLInputElement>document.getElementById("txt_uf");
const cep = <HTMLInputElement>document.getElementById("txt_cep");
const empresa = <HTMLInputElement>document.getElementById("txt_empresa");
const cargo = <HTMLInputElement>document.getElementById("txt_cargo");
const area_atuacao = <HTMLInputElement>document.getElementById("txt_area_atuacao");
const valor_ingresso = <HTMLElement>document.getElementById("valor");

const valor:number = 1000;

valor_ingresso.innerText = String(valor);
radio_brasileiro.checked = true;

function enviar(){
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
    console.log(cep .value);
    console.log(empresa.value);
    console.log(cargo.value);
    console.log(area_atuacao.value);
}