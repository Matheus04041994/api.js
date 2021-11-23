const $btnconsultar=queryselector("#btnConsultar")
const $cep = document.querySelector("#cep")
const $cidade =document.querySelector("#cidade")

function consultarHandler() {
    $cidade.innerHTML = $cep.value
    fetch("http://viacep.com.br.ws/"+ cep + "/json/",{
        method: 'GET' ,
        headears: {
            Accept: 'aplication/json'
            'content -type'   :'aplication /json'
        }
    }).then(function(response) {
        response.json().then.(function)(data) {
            document.querySelector("#cidade").innerHTML = data ['localidade']
        })

    })

}
$btnconsultar.onclick = consultarHandler 


document.querySelector("#btnConsultar").onclick = function (){
    //alert ("funciona!!!")
    let cep = document.queryselector("#cep").value
    document.queryselector("#ciadde").innerHTML =cep
}