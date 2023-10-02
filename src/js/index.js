window.addEventListener('load', function() {
    const lista = document.querySelector('.botoes'); // Seleciona a lista

    const listaAltura = lista.clientHeight; // Altura da lista visível

    const listaConteudoAltura = lista.scrollHeight; // Altura do conteúdo da lista
  
    // Calcula a posição para centralizar a lista
    const meioDaLista = (listaConteudoAltura - listaAltura) / 2;
  
    // Define o scrollTop para a posição calculada
    lista.scrollTop = meioDaLista;
  });
  

/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
        passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
        passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
        passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
        passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
        passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
        passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
a seleção dele 
*/


const botoes = document.querySelectorAll('.botao');//pega todos os elementos com a classe especificada -> gera uma lista

const personagens = document.querySelectorAll('.personagem')//pega todos os elementos com a classe especificada -> gera uma lista

/* 
    precisa percorrer a lista com forEach para que o addEventListener consiga ouvir cada botão separadamente e dessa forma descobrir qual estava selecionado
*/
botoes.forEach((botao, index) => {
    /* 
            adiciona um ouvinte de evento no elemento, meio que é como se adicionasse uma escuta no elemento
        */
    botao.addEventListener('click', () => {
        desselecionarBotao();
        desselecionarPersonagem();
            
        botao.classList.add('selecionado');    
        personagens[index].classList.add('selecionado')
        /*
        se as imagens estão na mesma ordem dos botões podemos usar o index dos botoes para selecionar o mesmo personagem na lista de imagens já que o index é o mesmo
    */
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

