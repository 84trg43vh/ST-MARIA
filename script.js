document.addEventListener('DOMContentLoaded', function() {
    // Função para definir a saudação conforme o horário
    function definirSaudacao() {
        const agora = new Date();
        const horas = agora.getHours();
        const minutos = agora.getMinutes();
        const tempoTotalMinutos = horas * 60 + minutos;
        
        const saudacaoElemento = document.getElementById('saudacao');
        
        if (tempoTotalMinutos >= 6*60 && tempoTotalMinutos < 12*60+30) {
            saudacaoElemento.textContent = 'Olá, Janaise.';
        } else {
            saudacaoElemento.textContent = 'Olá, João.';
        }
    }
    
    definirSaudacao();
    setInterval(definirSaudacao, 60000);

    // Evento para o card Balança
    document.getElementById('balanca').addEventListener('click', function() {
        window.location.href = 'balanca.html';
    });

    // Evento para o card Diesel (se houver pasta DIESEL)
    document.getElementById('diesel').addEventListener('click', function() {
        window.location.href = 'diesel.html';
    });

    // Eventos para os botões também
    document.querySelectorAll('.select-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Evitar propagação para o card
            const card = this.closest('.option-card');
            if (card.id === 'balanca') {
                window.location.href = 'balanca.html';
            } else if (card.id === 'diesel') {
                window.location.href = 'diesel.html';
            }
        });
    });

    // Acessibilidade
    const options = document.querySelectorAll('.option-card');
    options.forEach(option => {
        option.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        option.setAttribute('tabindex', '0');
        option.setAttribute('role', 'button');
        option.setAttribute('aria-label', option.querySelector('h3').textContent + ', clique para acessar');
    });
});
