const corpoPiadas = document.getElementById('corpoPiadas')

function testeApi() {

    axios.get('https://v2.jokeapi.dev/joke/Any')
    .then(response => {
        console.log(response.data.results);
        
        const piadas = response.data.results;
        preencherPiada(piadas);
    })
    .catch(error => {
        console.log('Deu erro, se vira ai: ', error);
    });
}

const botaoChamarAPI = document.getElementById('btChamaApi');

botaoChamarAPI.addEventListener('click', () => {
    testeApi();
});

function preencherPiada(piada){
    const linha = document.createElement('tr');

    const pergunta = document.createElement('td');
    pergunta.textContent = piada.setup;
    linha.appendChild(pergunta);

    const resposta = document.createElement('td');
    resposta.textContent = piada.delivery;
    linha.appendChild(resposta);

    corpoTabelaPiada.appendChild(linha);
}