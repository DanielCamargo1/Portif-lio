import 'boxicons'



const projetos = document.querySelectorAll('.projetos-item');

projetos.forEach(projeto => {
    projeto.addEventListener('mouseover', () => {
        projeto.style.transform = 'scale(1.05)'; 
        projeto.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; // Adiciona sombra
    });

    projeto.addEventListener('mouseout', () => {
        projeto.style.transform = 'scale(1)'; 
        projeto.style.boxShadow = 'none'; 
    });
});
