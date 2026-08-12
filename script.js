// Aguarda o HTML carregar completamente antes de executar
document.addEventListener("DOMContentLoaded", function() {
    
    // Captura o botão do HTML pelo ID
    const botao = document.getElementById("botao-leitura");

    // Adiciona o evento de clique ao botão
    botao.addEventListener("click", function() {
        const titulo = document.getElementById("titulo-noticia").innerText;
        
        // Exibe um alerta interativo na tela
        alert("Obrigado por ler! Seu registro de leitura da notícia:\n\n'" + titulo + "'\n\nfoi enviado com sucesso para a disciplina de Educação digital.");
    });
    
});
