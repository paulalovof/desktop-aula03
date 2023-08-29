function testeApi() {
    axios.get('https://v2.jokeapi.dev/joke/Any').then(response => {

        const piada = response.data;

        preencherPiada(piada);
    })
}

function apiGato(){
    axios.get('https://api.thecatapi.com/v1/images/search').then(response =>{
        const gato = response;
        preencherImg(gato);
    })
}

const botaoChamarAPI = document.getElementById('btChamaApi');

botaoChamarAPI.addEventListener('click', () => {
    testeApi();
    apiGato();
});

function preencherPiada(piada){
    const resposta = document.getElementById("resposta");

    const pergunta = document.getElementById("pergunta");

    pergunta.innerHTML = piada.setup;
    resposta.innerHTML = piada.delivery;
}

function preencherImg(gato){
    const imgato = document.getElementById("imgGato").src = gato.data[0].url;

    console.log(gato.data[0].url);
}
