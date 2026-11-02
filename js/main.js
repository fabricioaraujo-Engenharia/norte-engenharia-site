document.addEventListener('DOMContentLoaded', () => {
    
    // Captura os elementos do menu mobile
    const btnMobile = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const menuLinks = menu.querySelectorAll('a');

    // Abre e fecha o menu ao clicar no ícone de hambúrguer
    if (btnMobile && menu) {
        btnMobile.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }

    // Fecha o menu mobile automaticamente após clicar em qualquer link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.add('hidden');
        });
    });

});
