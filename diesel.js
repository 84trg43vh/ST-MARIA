document.addEventListener('DOMContentLoaded', function() {
    // Função para definir a saudação conforme o horário
    function definirSaudacao() {
        const agora = new Date();
        const horas = agora.getHours();
        const minutos = agora.getMinutes();
        const tempoTotalMinutos = horas * 60 + minutos;
        
        const saudacaoElemento = document.getElementById('saudacao');
        
        // Das 06:00 até 12:30 -> Janaise
        // Das 12:30 até 06:00 do dia seguinte -> João
        if (tempoTotalMinutos >= 6*60 && tempoTotalMinutos < 12*60+30) {
            saudacaoElemento.textContent = 'Olá, Janaise.';
        } else {
            saudacaoElemento.textContent = 'Olá, João.';
        }
    }
    
    // Função para atualizar data e hora
    function atualizarDataHora() {
        const agora = new Date();
        
        // Formatar data
        const opcoesData = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        };
        const dataFormatada = agora.toLocaleDateString('pt-BR', opcoesData);
        document.getElementById('data').textContent = dataFormatada;
        
        // Formatar hora
        const opcoesHora = { 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);
        document.getElementById('hora').textContent = horaFormatada;
    }
    
    // Definir a saudação inicial
    definirSaudacao();
    
    // Atualizar data e hora inicialmente
    atualizarDataHora();
    
    // Atualizar a saudação a cada minuto (caso a página fique aberta)
    setInterval(definirSaudacao, 60000);
    
    // Atualizar data e hora a cada segundo
    setInterval(atualizarDataHora, 1000);
    
    // Adicionar evento de clique para os cards de link
    document.querySelectorAll('.link-card').forEach(card => {
        card.addEventListener('click', function() {
            const link = this.getAttribute('data-link');
            if (link) {
                window.open(link, '_blank');
            }
        });
        
        // Tornar os cards focáveis para acessibilidade
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'link');
        
        // Tecla Enter ou Espaço para ativar o clique
        card.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.getAttribute('data-link');
                if (link) {
                    window.open(link, '_blank');
                }
            }
        });
    });
    
    // Adicionar evento de clique para o botão voltar via JavaScript também
    document.querySelector('.back-btn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});