// Função para rolar suavemente até o tópico desejado
function scrollToSection(sectionId) {
    // Seleciona a seção para onde queremos rolar
    const section = document.querySelector(sectionId);
    
    // Realiza a rolagem suave até a seção
    window.scrollTo({
        top: section.offsetTop - 80, // Ajusta a rolagem para que o topo da seção fique visível
        behavior: 'smooth' // Define o comportamento de rolagem suave
    });
 }
    