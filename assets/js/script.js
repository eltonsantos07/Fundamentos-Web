/* 
 Acessar por Id: getElementById 
 Assecar por tag: getElementByTagName() 
 Acessar por nome: getElementByName() 
 Acessar por classe: getElementByClassName() 
 Acessar por seletor: queryselector() 
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')
let vid = document.querySelector('#vid')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

/* Validar nome com mais de 3 caracteres */
function validaNome() {
    let txtName = document.querySelector('#txtNome')

    if (nome.value.length <= 2) {
        txtName.innerHTML = 'Nome Inválido'
        txtName.style.color = 'red'
    }
    else {
        txtName.innerHTML = 'Nome Válido'
        txtName.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = 'red'
    }
    else{
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 250) {
        txtAssunto.innerHTML = 'Texto grande demais. Digite no máximo 250 caracteres.'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }
    else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

/* Validação do formulário */
function enviar() {
    if (nomeOk == true && emailOk == ture && assuntoOk == true){
        alert('Formulário enviado com sucesso!')
    }
    else{
        alert('Dados inválidos! Preencha corretamente o formulário antes de enviar.')
    }
}

function mapaZoom() {
    mapa.style.width = '550px'
    mapa.style.height = '400px'
}

function mapaNormal() {
    mapa.style.width = '450px'
    mapa.style.height = '300px'
}

function videoZoom() {
    vid.style.width = '600px'
    vid.style.height = '400px'
}

function videoNormal() {
    vid.style.width = '560px'
    vid.style.height = '380px'
}