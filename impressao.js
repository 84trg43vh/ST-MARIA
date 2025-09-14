document.addEventListener('DOMContentLoaded', function() {
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
        
        // Formatar hora
        const opcoesHora = { 
            hour: '2-digit', 
            minute: '2-digit'
        };
        const horaFormatada = agora.toLocaleTimeString('pt-BR', opcoesHora);
        
        // Atualizar elementos na página
        if (document.getElementById('data')) {
            document.getElementById('data').textContent = dataFormatada;
        }
        
        if (document.getElementById('hora')) {
            document.getElementById('hora').textContent = horaFormatada;
        }
        
        // Atualizar data de geração no rodapé
        if (document.getElementById('dataGeracao')) {
            document.getElementById('dataGeracao').textContent = dataFormatada + ' às ' + horaFormatada;
        }
    }
    
    // Configurar botões
    function configurarBotoes() {
        const printBtn = document.getElementById('printBtn');
        const backBtn = document.getElementById('backBtn');
        
        if (printBtn) {
            printBtn.addEventListener('click', function() {
                window.print();
            });
        }
        
        if (backBtn) {
            backBtn.addEventListener('click', function() {
                window.history.back();
            });
        }
    }
    
    // Atalho de teclado Ctrl+P para impressão
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            e.preventDefault();
            window.print();
        }
    });
    
    // Atualizar título para impressão com tamanho otimizado
    window.addEventListener('beforeprint', function() {
        const dataAtual = new Date().toLocaleDateString('pt-BR');
        const horaAtual = new Date().toLocaleTimeString('pt-BR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        document.title = `Pesos por Caixa - ${dataAtual} ${horaAtual}`;
        
        // Reduzir ainda mais o tamanho dos elementos se necessário
        document.querySelectorAll('.variedade-bloco').forEach(bloco => {
            bloco.style.padding = '8px';
            if (bloco.querySelector('h3')) {
                bloco.querySelector('h3').style.fontSize = '10pt';
            }
            if (bloco.querySelector('.peso-info')) {
                bloco.querySelector('.peso-info').style.fontSize = '11pt';
            }
        });
    });
    
    // Restaurar configurações após impressão
    window.addEventListener('afterprint', function() {
        document.title = 'Peso/Caixa por Variedade - Sistema de Operações';
        
        // Restaurar estilos se necessário
        document.querySelectorAll('.variedade-bloco').forEach(bloco => {
            bloco.style.padding = '';
            if (bloco.querySelector('h3')) {
                bloco.querySelector('h3').style.fontSize = '';
            }
            if (bloco.querySelector('.peso-info')) {
                bloco.querySelector('.peso-info').style.fontSize = '';
            }
        });
    });
    
    // Inicializar
    atualizarDataHora();
    configurarBotoes();
    
    // Atualizar a cada minuto
    setInterval(atualizarDataHora, 60000);
    
    console.log('Página de impressão carregada com sucesso!');
});